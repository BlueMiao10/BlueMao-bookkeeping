<template>
  <ol class="labelTags2">
    <li v-for="tag in Object.keys(type === '-' ? dataSource[0]: dataSource[1])" :key="tag">
      <div>
        <Icon :name="(type === '-' ? dataSource[0] : dataSource[1])[tag]"/>
        <span>{{ tag }}</span>
      </div>
      <Icon name="delete"/>
    </li>
    <li v-for="(allTag,index) in (type === '-' ? newArrayTag(0): newArrayTag(1))" :key="index" class="labelAdd">
      <div>
        <Icon :name="allTag.icon"/>
        {{ allTag.name }}
      </div>
      <div>
        <Icon name="delete" class="delete"/>
      </div>
    </li>
    <li @click="updateTag">
      <router-link to="/labels/edit">
        <span>添加新的标签</span>
        <Icon name="right" class="right"/>
      </router-link>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import EventBus from '@/eventBus';
import labelListModel from '@/models/labelListModel';
import tagListModel from '@/models/tagListModel';

@Component
export default class Tags extends Vue {
  arrTag: Record<string, string> = {};
  @Prop(Array) dataSource: Record<string, string>[] | undefined;
  type = '-';
  newTag = tagListModel.fetch();

  updateTag() {
    if (this.dataSource) {
      let arr = (this.type === '-' ? this.dataSource[0] : this.dataSource[1]);
      Object.keys(arr).forEach(value => {
        Vue.set(this.arrTag, value, arr[value]);
      });
      labelListModel.save(this.arrTag);
    }
  }

  newArrayTag(number:number){
    if((tagListModel.fetch())[0] === undefined){
      return
    }else{
      return this.newTag[number].slice(1)
    }
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