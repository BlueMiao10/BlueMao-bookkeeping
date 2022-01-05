<template>
  <ul class="tabs">
    <li v-for="item in dataSource" :key="item.value" @click="select(item)"
        :class="liClass(item)"
    >{{ item.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = { text: string, value: string }
@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
  @Prop(String) readonly value!: string;
  @Prop(String) classPrefix?: string;

  liClass(item: DataSourceItem) {
    return {
      selected: item.value === this.value,
      [this.classPrefix + '-tabs-item']: this.classPrefix
    };
  }

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);
  }
}
</script>

<style scoped lang="scss">
.tabs {
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