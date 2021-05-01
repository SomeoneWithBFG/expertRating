<template>
  <div class="container">
    <div>
      <a-select class="selector" @change="handleChange">
        <a-select-option value="pairComparsion">
          Метод парных сравнений
        </a-select-option>
        <a-select-option value="sequentiallyComparison">
          Метод последовательных сравнений
        </a-select-option>
        <a-select-option value="weighing" >
          Метод взвешивания
        </a-select-option>
        <a-select-option value="preference">
          Метод предпочтения
        </a-select-option>
        <a-select-option value="kondorse">
          Принцип Кондорсе
        </a-select-option>
        <a-select-option value="kemeniSnella">
          Метод Кемени-Снелла
        </a-select-option>
      </a-select>
      <InputSelectors :method="method" />
      <a-button 
        v-if="method"
        class="calcButton"
        @click="calculate()"
        :type="isCalculated ? 'danger' : 'default'"
      >
        {{isCalculated ? 'Отменить' : 'Рассчитать'}}
      </a-button>
      <div v-if="isCalculated">
        <div v-if="method==='pairComparsion'"> <PairComparsion /> </div>
        <div v-if="method==='sequentiallyComparison'"> <SequentiallyComparison /></div>
        <div v-if="method==='weighing'"> <Weighing /> </div>
        <div v-if="method==='preference'"> <Preference /> </div>
        <div v-if="method==='kondorse'"> <Kondorse /> </div>
        <div v-if="method==='kemeniSnella'"> <KemeniSnella /> </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      method: "",
      isCalculated: false,
    }
  },
  methods: {
    handleChange(value) {
      this.method = value;
    },
    calculate() {
      this.isCalculated = !this.isCalculated;
    },
  },
  mounted: function () {
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.calcButton{
  width: 7.5rem;
  margin-bottom: 2rem;
}
.selector {
  width: 16rem;
  margin-top: 2rem;
}
</style>
