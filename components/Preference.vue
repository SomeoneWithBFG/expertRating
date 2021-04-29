<template>
  <div class="preferenceDataContainer">
    <div>
      Модифицированная матрица предпочтения: 
      <div v-for="(item) in dataToShow.modMatrix" :key="item" class="preferenceLine">
        {{item}}
      </div>
    </div>
    <div>
      Суммарные оценки предпочтения: {{dataToShow.sumMarks}}
    </div>
    <div>
      Сумма всех оценок: {{dataToShow.sumOfMarks}}
    </div>
    <div>
      Искомые веса целей: {{dataToShow.weights}}
    </div>
    <div>
      Порядок предпочтения целей: {{dataToShow.order}}
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
      preference: "algorithms/preference",
    }),
    dataToShow: function () {
      console.log(this.preference)
      var numOfEl = this.preference.modMatrix[0].length
      var data = {
        modMatrix: Array(this.preference.modMatrix.length).fill(""),
        sumMarks: "",
        sumOfMarks: "",
        weights: "",
        order: "",
      }
      for (var i = 0; i < this.preference.modMatrix.length; i++) {
        for (var j = 0; j < numOfEl; j++) {
          data.modMatrix[i] += this.preference.modMatrix[i][j] + " ";
        }
      }
      for (var i = 0; i < numOfEl; i++) {
        data.sumMarks += i+1 + ": " + this.preference.sumMarks[i];
        if (i+1 !== this.preference.sumMarks.length)
          data.sumMarks += " | "
      }
      for (var i = 0; i < numOfEl; i++) {
        data.weights += i+1 + ": " + this.preference.weights[i];
        if (i+1 !== this.preference.weights.length)
          data.weights += " | "
      }
      data.sumOfMarks = this.preference.sumOfMarks
      data.order = this.preference.order
      return data
    },
  }
}
</script>

<style>
.preferenceDataContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.preferenceLine {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
</style>
