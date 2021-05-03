<template>
  <div class="container">
    <div>
      <a-select class="selector" @change="handleChange" :disabled="isCalculated">
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
      <InputSelectors :method="method" :isCalculated="isCalculated"/>
      <a-button 
        v-if="method"
        class="calcButton"
        @click="calculate()"
        :type="isCalculated ? 'danger' : 'default'"
      >
        {{isCalculated ? 'Отменить' : 'Рассчитать'}}
      </a-button>
      <div v-if="isCalculated">
        <div v-if="method==='pairComparsion'"> <PairComparsion :solution="solution"/> </div>
        <div v-if="method==='sequentiallyComparison'"> <SequentiallyComparison :solution="solution"/></div>
        <div v-if="method==='weighing'"> <Weighing :solution="solution"/> </div>
        <div v-if="method==='preference'"> <Preference :solution="solution"/> </div>
        <div v-if="method==='kondorse'"> <Kondorse :solution="solution"/> </div>
        <div v-if="method==='kemeniSnella'"> <KemeniSnella :solution="solution"/> </div>
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
      solution: {},
    }
  },
  computed: {
    ...mapGetters({
      getX: "store/getX",
      getY: "store/getY",
      solve: "store/solve",
    }),
  },
  methods: {
    ...mapMutations({
      changeX: "store/changeX",
      changeY: "store/changeY",
    }),
    handleChange(value) {
      if (value === "sequentiallyComparison") {
        this.changeX(2)
      }
      if (value === "pairComparsion") {
        this.changeY(this.getY)
      }
      this.method = value;
      this.isCalculated = false;
    },
    calculate() {
      this.isCalculated = !this.isCalculated;
      if (this.isCalculated)
        this.solution = this.solve(this.method);
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
