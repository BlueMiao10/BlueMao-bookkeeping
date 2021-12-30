<template>
  <div>
    <ul class="types">
      <li :class=" value === '+' && 'selected' " @click="selectType('+')">收入</li>
      <li :class=" value === '-' && 'selected' " @click="selectType('-')">支出</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import EventBus from '@/eventBus';

@Component
export default class Types extends Vue {
  @Prop() readonly value!: string;

  //@Prop 告诉 Vue PropA 不是data 是  Prop
  //Number 告诉 Vue PropA 是个 Number   运行时  JS在浏览器或者Node环境运行的过程中
  //PropA 是属性名
  //number|undefined 指PropA的类型   编译时  TS编译成JS的过程中
  // @Prop(Number) PropA:number|undefined;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  selectType(value: string) {  //type只能是 +/- 中的一个，如果不是其中的一个，就会抛出错误
    if (value !== '-' && value !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value', value);
    EventBus.$emit('value', value);
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.types {
  display: flex;
  font-size: 16px;
  justify-content: space-evenly;
  padding: 10px 0;
  background-color: #fff;

  li {
    padding: 3px 20px;
    border-radius: 5px;
    border: 1px solid #efefef;
    margin: 0 3px;

    &.selected {
      //border: 1px solid #000;
      background-color: #B2D5F5;
    }
  }
}
</style>