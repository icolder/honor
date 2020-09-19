<style lang="scss" scoped>
.stepper-container {
  .step-btn {
    display: inline-block;
    width: 45px;
    height: 45px;
    background-color: #87ceeb;
    border: 12px solid #fff;
    border-radius: 50%;
    box-sizing: border-box;
    // line-height: 21px;
    text-align: center;
    font-size: 20px;
  }
}
</style>

<template>
  <div class="stepper-container">
    <span class="iconfont icon-jianhao step-btn" v-show="value>0" @click.stop="substractClick"></span>
    <span class="text" v-show="value>0">{{value}}</span>
    <span class="iconfont icon-jiahao step-btn" @click.stop="addClick"></span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "stepper",
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  model: {
    prop: "value",
    event: "value-changed"
  },
  data() {
    return {
      // value: 0
    }
  },
  methods: {
    substractClick() {
      // this.value -=1
      this.$emit("value-changed", this.value-1)
    },
    addClick() {
      // this.value +=1
      this.$emit("value-changed", this.value+1)
    }
  },
  components: {}
}
</script>