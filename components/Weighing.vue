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
    data() {
      return {
      }
    },
    computed: {
    ...mapGetters({
      weighing: "algorithms/weighing",
    }),
    dataToShow: function () {
      var data = {
        sumOfMarks: 0,
        relativeExpertsMarks: "",
        weights: "",
        order: "",
      }
      data.sumOfMarks = this.weighing.sumOfMarks
      this.weighing.relativeExpertsMarks.map((item, index) => {
        data.relativeExpertsMarks += index+1 + ": " + item
        if (index+1 !== this.weighing.relativeExpertsMarks.length)
          data.relativeExpertsMarks += ", "
      })
      this.weighing.weights.map((item, index) => {
        data.weights += index+1 + ": " + item.toFixed(4)
        if (index+1 !== this.weighing.weights.length)
          data.weights += ", "
      })
      data.order = this.weighing.order
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
