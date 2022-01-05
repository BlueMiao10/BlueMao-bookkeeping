<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
  </Layout>
</template>

<script lang="ts">
import Types from '@/components/Money/Types.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tabs, Types},
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = [{text: '按天', value: 'day'}, {text: '按月', value: 'month'}, {text: '按年', value: 'year'}];
  typeList = [{text: '支出', value: '-'}, {text: '收入', value: '+'}];
}
</script>

<style scoped lang="scss">
::v-deep .type--tabs-item {
  &.selected {
    background-color: #B2D5F5;
  }
}
</style>