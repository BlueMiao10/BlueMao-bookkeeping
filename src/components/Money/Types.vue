<template>
  <div>
    <ul class="types">
      <li :class=" type === '+' && 'selected' " @click="selectType('+')">收入</li>
      <li :class=" type === '-' && 'selected' " @click="selectType('-')">支出</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type = '-'; //'-'代表支出，'+'代表收入

  //@Prop 告诉 Vue PropA 不是data 是  Prop
  //Number 告诉 Vue PropA 是个 Number   运行时  JS在浏览器或者Node环境运行的过程中
  //PropA 是属性名
  //number|undefined 指PropA的类型   编译时  TS编译成JS的过程中
  // @Prop(Number) PropA:number|undefined;

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  selectType(type: string) {  //type只能是 +/- 中的一个，如果不是其中的一个，就会抛出错误
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }
}

//js 实现
// export default {
//   name: 'Types',
//   data() {
//     return {
//       type: '-' //'-'代表支出，'+'代表收入
//     };
//   },
//   methods: {
//     selectType(type) {  //type只能是 +/- 中的一个，如果不是其中的一个，就会抛出错误
//       if (type !== '-' && type !== '+') {
//         throw new Error('type is unknown');
//       }
//       this.type = type;
//     }
//   }
// };
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.types {
  display: flex;
  font-size: 16px;
  justify-content: center;

  li {
    margin: 5px 16px;

    &.selected {
      color: $color-highlight;
    }
  }
}
</style>