<template>
  <div class="kemeniSnellaDataContainer">
    <div>
      Матрицы бинарных предпочтений: 
      <div v-for="(matrix, mIndex) in this.dataToShow.binaryMatrixArray" :key="matrix.toString()" >
        <br>
        <div> Эксперт {{mIndex+1}} </div>
        <div v-for="(arr) in matrix" :key="arr.toString()" class="kemeniSnellaLine">
          <div v-for="(item) in arr" :key="item">
            {{item}}
          </div>
        </div>
      </div>
      <br>
      Матрица потерь: 
      <div v-for="(arr) in dataToShow.looseMatrix" :key="arr.toString()" class="kemeniSnellaLine">
        <div v-for="(item) in arr" :key="item">
          {{item}}
        </div>
      </div>
    </div>
    <br>
    <div>
      Результат: {{dataToShow.order}}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
    data() {
      return {
      }
    },
    computed: {
    ...mapGetters({
      kemeniSnella: "algorithms/kemeniSnella",
    }),
    dataToShow: function () {
      return this.kemeniSnella;
    },
  }
}
</script>

<style>
.kemeniSnellaDataContainer {  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
}
.kemeniSnellaLine {
  max-width: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
</style>
