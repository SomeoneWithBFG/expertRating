<template>
  <div class="matrix">
    <div v-for="(val, indexY) in new Array(getX)" :key="val">
        <div v-for="(val, indexX) in new Array(getY)" :key="val" class="string">
            <a-input 
              class="inputField"
              :placeholder="0" 
              @change="handleChange(indexX, indexY)"
              v-model="array[indexX][indexY]"/>
        </div>
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
            getX: "algorithms/getX",
            getY: "algorithms/getY",
            getInputMatrix: "algorithms/getInputMatrix",
        }),
        array: function () {
          var m = new Array(10)
          for (var i = 0; i < 10; i++) {
            m[i] = new Array(10);
            m[i].fill(0);
          }
          return m;
        }
    },
    methods: {
      ...mapMutations({
        setMatrixElement: "algorithms/setMatrixElement",
      }),
      handleChange(x, y) {
        var payload = {
          x: x, 
          y: y, 
          value: parseFloat(this.array[x][y] || 0)
        }
        this.setMatrixElement(payload)
      }
    }
}
</script>

<style>
.matrix {
  display: flex;
  justify-content: center;
  max-width: 40rem;
  margin-bottom: 2rem;
}
.string {
  display: flex;
  justify-content: space-between;
}
.inputField {
  max-width: 8.25rem;
}
</style>
