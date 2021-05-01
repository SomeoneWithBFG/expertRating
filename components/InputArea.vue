<template>
  <div class="matrix">
    <div v-for="(val, indexY) in new Array(x)" :key="val" >
      {{text[indexY]}}
      <div v-for="(val, indexX) in new Array(y)" :key="val" class="string">
        <div v-if="indexY === 0" class="stringEl">
          Э{{indexX+1}} &nbsp;
        </div>
        <a-input 
          class="inputField"
          :placeholder="0" 
          @change="handleChange(indexX, indexY)"
          v-model="array[indexX][indexY]"
        />
      </div>
    </div>
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
    ...mapGetters({
        getX: "store/getX",
        getY: "store/getY",
        getInputMatrix: "store/getInputMatrix",
    }),
    text: function() {
      switch(this.method) {
        case "sequentiallyComparison":
          return ["название", "вес"];
        case "weighing":
          var arr = [];
          for (var i = 0; i < this.getX; i++) {
            arr.push("Z" + i);
          }
          arr[0] = "R"
          return arr
        default: 
          var arr = [];
          for (var i = 0; i < this.getX; i++) {
            arr.push("Z" + (i + 1));
          }
          return arr
      }
    },
    x: function() {
      return this.getX
    },
    y: function() {
      return this.getY
    },
    array: function () {
      var m = new Array(10)
      for (var i = 0; i < 10; i++) {
        m[i] = new Array(10);
        m[i].fill(0);
      }
      return m;
    },
  },
  methods: {
    ...mapMutations({
      setMatrixElement: "store/setMatrixElement",
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
  margin-bottom: 2rem;
  align-items: center;
  text-align: center;
}
.string {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.stringEl {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.inputField {
  max-width: 4rem;
}
</style>
