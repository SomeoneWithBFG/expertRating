<template>
  <div>
    <div class="text">
      Размерность матрицы: &nbsp;
      <div class="textItem">
        X
      </div>
      <a-select style="width: 5rem" @change="handleChangeX" default-value="2" :disabled="disableX">
        <a-select-option v-for="(val,index) in new Array(9)" :key=index :value=index>
          {{index + 2}}
        </a-select-option>
      </a-select>
      <div class="textItem">  
        Y
      </div>
      <a-select style="width: 5rem" @change="handleChangeY" default-value="2" :disabled="disableY"> 
        <a-select-option v-for="(val,index) in new Array(9)" :key=index :value=index>
          {{index + 2}}
        </a-select-option>
      </a-select>
    </div>
    <InputArea :method="this.method"/>
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
  computed: { 
    disableX: function() {
      switch (this.method) {
        case "sequentiallyComparison": return true
        default: return false
      }
    },
    disableY: function() {
      switch (this.method) {
        
        default: return false
      }
    },
  },
  methods: {
    ...mapMutations({
      changeX: "store/changeX",
      changeY: "store/changeY",
    }),
    handleChangeX(value) {
      this.changeX(value+2)
    },
    handleChangeY(value) {
      this.changeY(value+2)
    },
  },
}
</script>

<style>
.text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 2rem;
}
.textItem {
  padding: 0.2rem;
}
</style>
