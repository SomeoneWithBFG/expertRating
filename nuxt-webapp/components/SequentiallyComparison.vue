<template>
  <div class="sequentiallyComparisonDataContainer">
    <div>
      Тройки целей, вызвавшие коррекцию весов:
      {{ dataToShow.causedCorrections }}
    </div>
    <div>Скорректированные оценки: {{ dataToShow.correctedEvaluations }}</div>
    <div>Веса целей: {{ dataToShow.weights }}</div>
    <div>Сумма весов целей: {{ dataToShow.sumOfWeights }}</div>
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
    dataToShow: function () {
      var data = {
        causedCorrections: '',
        correctedEvaluations: '',
        sumOfWeights: 0,
        weights: '',
        order: '',
      }
      data.causedCorrections = this.solution.causedCorrections
      data.sumOfWeights = this.solution.sumOfWeights
      this.solution.correctedEvaluations.map((item, index) => {
        data.correctedEvaluations += item
        if (index + 1 !== this.solution.correctedEvaluations.length)
          data.correctedEvaluations += ', '
      })
      this.solution.weights.map((item, index) => {
        data.weights += item.toFixed(4)
        if (index + 1 !== this.solution.weights.length) data.weights += ', '
      })
      var foo = this.solution.weights
      data.order = this.solution.order
      return data
    },
  },
}
</script>

<style>
.sequentiallyComparisonDataContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
