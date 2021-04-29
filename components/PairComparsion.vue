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
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      pairComparsion: "algorithms/pairComparsion",
    }),
    dataToShow: function () {
      var data = {
        values: "",
        sumOfValues: 0,
        weights: "",
        order: "",
      }
      this.pairComparsion.values.map((item, index) => {
        data.values += index + 1 + ": " + item;
        if (index + 1 !== this.pairComparsion.values.length)
          data.values += ", "
      })
      data.sumOfValues = this.pairComparsion.sumOfValues
      this.pairComparsion.weights.map((item, index) => {
        data.weights += index + 1 + ": " + item.toFixed(4);
        if (index+1 !== this.pairComparsion.weights.length)
          data.weights += ", "
      })
      data.order = this.pairComparsion.order
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
