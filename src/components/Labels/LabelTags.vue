<template>
  <ol class="labelTags2">
    <li v-for="tag in type === '-' ? tagPay: tagIncome" :key="tag.name">
      <div>
        <Icon :name="tag.icon"/>
        <span>{{ tag.name }}</span>
      </div>
      <Icon name="lock"/>
    </li>
    <li v-for="(allTag,index) in (type === '-' ? newArrayTag(0): newArrayTag(1))" :key="index">
      <div>
        <Icon :name="allTag.icon"/>
        {{ allTag.name }}
      </div>
      <div @click="remove(allTag.id)" class="delete">
        <Icon name="delete"/>
      </div>
    </li>
    <li @click="updateTag">
      <router-link to="/labels/edit" class="add">
        <span>点击添加新的标签</span>
        <Icon name="right" class="right"/>
        <Icon name="right" class="right"/>
        <Icon name="right" class="right"/>
      </router-link>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import EventBus from '@/eventBus';
import labelListModel from '@/models/labelListModel';
import recordListModel from '@/models/recordListModel';

@Component
export default class Tags extends Vue {
  type = '-';
  newTag = window.tagList;
  tagPay = recordListModel.initLabel(0);
  tagIncome = recordListModel.initLabel(1);

  updateTag() {
    let arr = (this.type === '-' ? this.tagPay : this.tagIncome);
    if (arr) {
      labelListModel.save(arr.map(item => item.name).length);
    }
  }

  newArrayTag(number: number) {
    if ((this.newTag)[0] === undefined) {
      return;
    } else {
      return this.newTag[number].slice(1);
    }
  }

  remove(id: string) {
    window.removeTag(id);
  }

  created() {
    EventBus.$on('value', (data: string) => {
      this.type = data;
    });
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
    }

    .icon {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    .right {
      width: 16px;
      height: 16px;
      margin: 0
    }
  }
}
</style>