<template>
  <ol class="labelTags2">
    <li v-for="tag in Object.keys(type === '-' ? tags[0]: tags[1])" :key="tag">
      <div>
        <Icon :name="tag"/>
        <span>{{ (type === '-' ? tags[0] : tags[1])[tag] }}</span>
      </div>
      <Icon name="delete"/>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import EventBus from '@/eventBus';

@Component

export default class Tags extends Vue {
  type = '-';
  tags = [{
    'recreation': '一般', 'rent': '房租', 'cloth': '穿衣', 'transport': '出行', 'alcohol': '酒水', 'travel': '旅游', 'friend': '人情',
    'snack': '零食', 'study': '学习', 'eat': '吃饭'
  }, {'recreation': '一般', 'invest': '投资', 'salary': '工资', 'envelope': '红包', 'reimburse': '报销', 'bonus': '奖金'}];

  created() {
    EventBus.$on('value', (data: string) => {
      this.type = data;
    });
    // EventBus.$on('dataSure', (data: Record<string, string>) => {
    //   Vue.set((this.type === '-' ? this.tags[0] : this.tags[1]), Object.keys(data)[0], data[Object.keys(data)[0]]);
    // });
  }
}
</script>

<style scoped lang="scss">
.labelTags2 {
  font-size: 16px;
  padding: 0 3px;

  li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    padding-left: 10px;

    div {
      display: flex;
      align-items: center;

      .icon {
        width: 24px;
        height: 24px;
      }
    }

    .icon {
      margin-right: 10px;
      width: 16px;
      height: 16px;
    }
  }
}
</style>