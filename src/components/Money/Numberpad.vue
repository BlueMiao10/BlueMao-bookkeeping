<template>
  <div class="numberPad clearfix">
    <button @click="inputContent"><span>1</span></button>
    <button @click="inputContent"><span>2</span></button>
    <button @click="inputContent"><span>3</span></button>
    <button @click="remove"><span>删除</span></button>
    <button @click="inputContent"><span>4</span></button>
    <button @click="inputContent"><span>5</span></button>
    <button @click="inputContent"><span>6</span></button>
    <button @click="clear"><span>清空</span></button>
    <button @click="inputContent"><span>7</span></button>
    <button @click="inputContent"><span>8</span></button>
    <button @click="inputContent"><span>9</span></button>
    <button @click="ok" class="ok  box"><span>OK</span></button>
    <button @click="inputContent" class="zero"><span>0</span></button>
    <button @click="inputContent"><span>.</span></button>
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
      EventBus.$emit('output', parseInt(this.output));
      return;
    }
    if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      EventBus.$emit('output', parseInt(this.output));
      return;
    }
    if (this.output.indexOf('.') >= 0 && input === '.') {return;}
    this.output += input;
    EventBus.$emit('output', parseInt(this.output));
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);
    }
    EventBus.$emit('output', parseInt(this.output));
  }

  clear() {
    this.output = '0';
    EventBus.$emit('output', parseInt(this.output));
  }

  ok() {
    this.$emit('update:value', parseFloat(this.output));
    //这里的名字可以随便取
    this.$emit('submit', parseInt(this.output));
    this.output = '0';
    EventBus.$emit('output', parseInt(this.output));
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.numberPad {
  @extend %clearfix;

  button, .ok {
    float: left;
    width: 25%;
    height: 54px;
    outline: none;
    border: none;
    background-color: #bdb7b7;
    padding: 5px 2px 0;

    &.ok {
      height: 54*2px;
      float: right;

      span {
        line-height: 54*2px;
      }
    }

    &.zero {
      width: 50%;
    }

    span {
      display: block;
      height: 100%;
      background-color: #fff;
      border-radius: 8px;
      line-height: 54px;

      &:active {
        background-color: #d7d3d3;
      }
    }
  }

  .el-message {
    width: 100px;
  }
}
</style>