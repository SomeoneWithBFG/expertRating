<template>
  <div class="sequentiallyComparisonDataContainer">
    <div>
      Тройки целей, вызвавшие коррекцию весов: {{dataToShow.causedCorrections}}
    </div>
    <div>
      Скорректированные оценки: {{dataToShow.correctedEvaluations}}
    </div>
    <div>
      Веса целей: {{dataToShow.weights}}
    </div>
    <div>
      Сумма весов целей: {{dataToShow.sumOfWeights}}
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
      sequentiallyComparison: "algorithms/sequentiallyComparison",
    }),
    dataToShow: function () {
      var data = {
        causedCorrections: "",
        correctedEvaluations: "",
        sumOfWeights: 0,
        weights: "",
        order: "",
      }
      data.causedCorrections = this.sequentiallyComparison.causedCorrections
      data.sumOfWeights = this.sequentiallyComparison.sumOfWeights
      this.sequentiallyComparison.correctedEvaluations.map((item, index) => {
        data.correctedEvaluations += item
        if (index+1 !== this.sequentiallyComparison.correctedEvaluations.length)
          data.correctedEvaluations += ", "
      })
      this.sequentiallyComparison.weights.map((item, index) => {
        data.weights += item.toFixed(4)
        if (index+1 !== this.sequentiallyComparison.weights.length)
          data.weights += ", "
      })
      var foo = this.sequentiallyComparison.weights
      data.order = this.sequentiallyComparison.order
      return data
    },
  }
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
