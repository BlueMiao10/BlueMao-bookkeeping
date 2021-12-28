<template>
  <ul class="current">
    <li v-for="tag in name" :key="tag" @click="toggle(tag)" :class="{selected:selectedTags.indexOf(tag)>=0}">
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
export default class Tag1 extends Vue {
  selectedTags: string[] = [];
  svg: string[] = ['recreation', 'rent', 'cloth', 'transport', 'alcohol', 'travel', 'friend', 'snack', 'study', 'eat'];
  name: string[] = ['一般', '房租', '穿衣', '出行', '酒水', '旅游', '人情', '零食', '学习', '吃饭'];

  toggle(tag: string) {
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

    &.selected {
      .icon {
        border-radius: 50%;
        border: 1px solid red;
      }
    }

    .icon {
      width: 40px;
      height: 40px;
    }
  }
}
</style>