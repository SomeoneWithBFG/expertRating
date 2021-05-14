<template>
  <div class="pairComparsionDataContainer">
    <div>
      Цена каждой цели: {{dataToShow.values}}
    </div>
    <div>
      Сумма цен: {{dataToShow.sumOfValues}}
    </div>
    <div>
      Исковые веса целей: {{dataToShow.weights}}
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
        values: "",
        sumOfValues: 0,
        weights: "",
        order: "",
      }
      this.solution.values.map((item, index) => {
        data.values += index + 1 + ": " + item;
        if (index + 1 !== this.solution.values.length)
          data.values += " | "
      })
      data.sumOfValues = this.solution.sumOfValues
      this.solution.weights.map((item, index) => {
        data.weights += index + 1 + ": " + item.toFixed(4);
        if (index+1 !== this.solution.weights.length)
          data.weights += " | "
      })
      data.order = this.solution.order
      return data
    },
  },
}
</script>

<style>
.pairComparsionDataContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
