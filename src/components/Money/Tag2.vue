<template>
  <ul class="current">
    <li v-for="tag in name" :key="tag" @click="toggle(tag)"
        :class="{selected:selectedTags.indexOf(tag)>=0}">
      <Icon :name="svg[name.indexOf(tag)]"/>
      {{ tag }}
    </li>
    <li class="new" @click="create">
      <Icon name="add"/>
      编辑
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Tag2 extends Vue {
  selectedTags: string[] = [];
  svg: string[] = ['recreation', 'invest', 'salary', 'envelope', 'reimburse', 'bonus'];
  name: string[] = ['一般', '投资', '工资', '红包', '报销', '奖金'];

  toggle(tag: string) {
    if (this.selectedTags.length > 0) {return;}
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
  }

  create() {
    const tag = window.prompt('请输入标签名');
    if (tag === '') {
      window.alert('标签名不能为空');
    } else {
      this.name.push(tag as string);
    }
  }
}
</script>

<style scoped lang="scss">

.current {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;


  li {
    display: flex;
    width: 20%;
    align-items: center;
    flex-direction: column;
    font-size: 13px;
    padding: 10px 0;

    .icon {
      width: 40px;
      height: 40px;
    }
  }
}
</style>