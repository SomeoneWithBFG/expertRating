<template>
  <div>
    <div class="text">
      <div class="textItem">
        Количество альтернатив
      </div>
      <a-select style="width: 5rem" @change="handleChangeX" default-value="2">
        <a-select-option v-for="(val,index) in new Array(10)" :key=index :value=index>
          {{index + 1}}
        </a-select-option>
      </a-select>
      <div class="textItem">
        Количество экспертов
      </div>
      <a-select style="width: 5rem" @change="handleChangeY" default-value="2">
        <a-select-option v-for="(val,index) in new Array(10)" :key=index :value=index>
          {{index + 1}}
        </a-select-option>
      </a-select>
    </div>
    <InputArea />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  props: {
    method: String,
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...mapMutations({
      changeX: "algorithms/changeX",
      changeY: "algorithms/changeY",
    }),
    handleChangeX(value) {
      this.changeX(value+1)
    },
    handleChangeY(value) {
      this.changeY(value+1)
    },
  },
}
</script>

<style>
.text {
  display: flex;
  justify-content: space-around;
  margin: 2rem;
}
.textItem {
  padding: 0.2rem;
}
</style>
