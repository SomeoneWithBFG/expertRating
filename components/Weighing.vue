<template>
  <div class="weighingDataContainer">
    <div>
      Сумма оценок экспертов: {{dataToShow.sumOfMarks}}
    </div>
    <div>
      Относительные оценки экспертов: {{dataToShow.relativeExpertsMarks}}
    </div>
    <div>
      Искомые веса: {{dataToShow.weights}}
    </div>
    <div>
      Порядок предпочтения целей: {{dataToShow.order}}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  props: {
    solution: Object,
  },
  data() {
    return {
    }
  },
  computed: {
    dataToShow: function () {
      var data = {
        sumOfMarks: 0,
        relativeExpertsMarks: "",
        weights: "",
        order: "",
      }
      data.sumOfMarks = this.solution.sumOfMarks
      this.solution.relativeExpertsMarks.map((item, index) => {
        data.relativeExpertsMarks += index+1 + ": " + item
        if (index+1 !== this.solution.relativeExpertsMarks.length)
          data.relativeExpertsMarks += ", "
      })
      this.solution.weights.map((item, index) => {
        data.weights += index+1 + ": " + item.toFixed(4)
        if (index+1 !== this.solution.weights.length)
          data.weights += ", "
      })
      data.order = this.solution.order
      return data
    },
  }
}
</script>

<style>
.weighingDataContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
