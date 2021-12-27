<template>
  <div class="numberPad clearfix">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>删除</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>清空</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button class="ok">OK</button>
    <button class="zero">0</button>
    <button>.</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue{
  output='';
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.numberPad {
  @extend %clearfix;

  button {
    @extend %outerShadow;
    float: left;
    width: 25%;
    height: 54px;
    outline: none;
    border: none;

    &.ok {
      height: 54*2px;
      float: right;
    }

    &.zero {
      width: 50%;
    }
  }
}
</style>