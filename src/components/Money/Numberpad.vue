<template>
  <div class="numberPad clearfix">
    <button @click="inputContent">1</button>
    <button @click="inputContent">2</button>
    <button @click="inputContent">3</button>
    <button @click="remove">删除</button>
    <button @click="inputContent">4</button>
    <button @click="inputContent">5</button>
    <button @click="inputContent">6</button>
    <button @click="clear">清空</button>
    <button @click="inputContent">7</button>
    <button @click="inputContent">8</button>
    <button @click="inputContent">9</button>
    <button @click="ok" class="ok">OK</button>
    <button @click="inputContent" class="zero">0</button>
    <button @click="inputContent">.</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import EventBus from '@/eventBus.ts';

@Component
export default class NumberPad extends Vue {
  output = '0';

  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent as string;
    if (this.output.length === 9) {
      EventBus.$emit('output', this.output);
      return;
    }
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      EventBus.$emit('output', this.output);
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {return;}
    this.output += input;
    EventBus.$emit('output', this.output);
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);
    }
    EventBus.$emit('output', this.output);
  }

  clear() {
    this.output = '0';
    EventBus.$emit('output', this.output);
  }

  ok() {
    this.$emit('update:value', this.output);
    //这里的名字可以随便取
    this.$emit('submit', this.output);
    this.output = '0';
    EventBus.$emit('output', this.output);
  }

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.numberPad {
  @extend %clearfix;

  button {
    float: left;
    width: 25%;
    height: 54px;
    outline: none;
    border: 1px solid #e6e6e6;
    transition: all .2s;
    border-radius: 27px;
    background-color: #fff;
    &.ok {
      height: 54*2px;
      float: right;
    }

    &.zero {
      width: 50%;
    }

    &:active {
      background-color: #f5f5f5;
    }
  }
}
</style>