<template>
  <div class="preferenceDataContainer">
    <div>
      Модифицированная матрица предпочтения:
      <div
        v-for="item in dataToShow.modMatrix"
        :key="item"
        class="preferenceLine"
      >
        {{ item }}
      </div>
    </div>
    <div>Суммарные оценки предпочтения: {{ dataToShow.sumMarks }}</div>
    <div>Сумма всех оценок: {{ dataToShow.sumOfMarks }}</div>
    <div>Искомые веса целей: {{ dataToShow.weights }}</div>
    <div>Порядок предпочтения целей: {{ dataToShow.order }}</div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  props: {
    solution: Object,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      preference: 'store/preference',
    }),
    dataToShow: function () {
      var numOfEl = this.solution.modMatrix[0].length
      var data = {
        modMatrix: Array(this.solution.modMatrix.length).fill(''),
        sumMarks: '',
        sumOfMarks: '',
        weights: '',
        order: '',
      }
      for (var i = 0; i < this.solution.modMatrix.length; i++) {
        for (var j = 0; j < numOfEl; j++) {
          data.modMatrix[i] += this.solution.modMatrix[i][j] + ' '
        }
      }
      for (var i = 0; i < numOfEl; i++) {
        data.sumMarks += i + 1 + ': ' + this.solution.sumMarks[i]
        if (i + 1 !== this.solution.sumMarks.length) data.sumMarks += ' | '
      }
      for (var i = 0; i < numOfEl; i++) {
        data.weights += i + 1 + ': ' + this.solution.weights[i]
        if (i + 1 !== this.solution.weights.length) data.weights += ' | '
      }
      data.sumOfMarks = this.solution.sumOfMarks
      data.order = this.solution.order
      return data
    },
  },
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
