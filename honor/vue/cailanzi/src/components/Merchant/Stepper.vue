<style lang="scss" scoped>
  .stepper-container {
    display: flex;
    align-items: center;
    .step-btn {
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 20px;
      display: inline-block;
    }
  }
</style>

<template>
  <div class="stepper-container">
    <span class="iconfont icon-jianhao substract step-btn" v-show="value>0" @click.stop="subClick"></span>
    <span v-show="value>0">{{value}}</span>
    <span class="iconfont icon-jiahao step-btn" @click.stop="addClick"></span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "stepper",
  props:{
    value: {
      type:Number,
      default: 0
    }
  },
  model: {
    prop: 'value',
    event: 'value-changed'
  },
  data() {
    return {
      // value: 0
    }
  },
  components: {},
  methods: {
    subClick(){
      // this.value -= 1;
      this.$emit('value-changed', this.value-1)
    },
    addClick(){
      // this.value += 1;
      this.$emit('value-changed', this.value+1)
    }
  }
}
</script>