<template>
  <div>
    <div class="text">
      Размерность матрицы: &nbsp;
      <div class="textItem">
        X
      </div>
      <a-select style="width: 5rem" @change="handleChangeX" default-value="2" :disabled="disableX">
        <a-select-option v-for="(val,index) in new Array(9)" :key=index :value=index>
          {{index + 2}}
        </a-select-option>
      </a-select>
      <div class="textItem">  
        Y
      </div>
      <a-select style="width: 5rem" @change="handleChangeY" default-value="2" :disabled="disableY"> 
        <a-select-option v-for="(val,index) in new Array(9)" :key=index :value=index>
          {{index + 2}}
        </a-select-option>
      </a-select>
    </div>
    <InputArea :method="this.method" :isCalculated="isCalculated"/>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  props: {
    method: String,
    isCalculated: Boolean,
  },
  data() {
    return {
    }
  },
  computed: { 
    disableX: function() {
      if(this.isCalculated)
        return true
      switch (this.method) {
        case "sequentiallyComparison": return true
        default: return false
      }
    },
    disableY: function() {
      if(this.isCalculated || this.method === "pairComparsion")
        return true
      switch (this.method) {
        default: return false
      }
    },
  },
  methods: {
    ...mapMutations({
      changeX: "store/changeX",
      changeY: "store/changeY",
    }),
    handleChangeX(value) {
      if (this.method === "pairComparsion")
        this.changeY(value+2)
      this.changeX(value+2)
    },
    handleChangeY(value) {
      this.changeY(value+2)
    },
  },
}
</script>

<style>
.text {
  display: flex;
  max-width: 24rem;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 2rem;
}
.textItem {
  padding: 0.2rem;
}
</style>
