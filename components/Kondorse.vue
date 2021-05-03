<template>
  <div class="kondorseDataContainer">
    <div>
      Матрица оценок: 
      <div v-for="(arr) in dataToShow.modMatrix" :key="arr.toString()" class="kondorseLine">
        <div v-for="(item) in arr" :key="item">
          {{item}}
        </div>
      </div>
    </div>
    <div>
      Альтернатива Кондорсе: {{dataToShow.best}}
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
      return this.solution;
    },
  }
}
</script>

<style>
.kondorseDataContainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.kondorseLine {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
</style>
