<template>
  <ol class="labelTags2">
    <li v-for="tag in Object.keys(type === '-' ? dataSource[0]: dataSource[1])" :key="tag">
      <div>
        <Icon :name="(type === '-' ? dataSource[0] : dataSource[1])[tag]"/>
        <span>{{ tag }}</span>
      </div>
      <Icon name="lock"/>
    </li>
    <li v-for="(allTag,index) in (type === '-' ? newArrayTag(0): newArrayTag(1))" :key="index" class="addLabel">
      <div>
        <Icon :name="allTag.icon"/>
        {{ allTag.name }}
      </div>
      <div @click="remove(allTag.id)">
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
import {Component, Prop} from 'vue-property-decorator';
import EventBus from '@/eventBus';
import labelListModel from '@/models/labelListModel';
import tagListModel from '@/models/tagListModel';

tagListModel.fetch();
@Component
export default class Tags extends Vue {
  arrTag: Record<string, string> = {};
  @Prop(Array) dataSource?: Record<string, string>[];
  type = '-';
  newTag = tagListModel.data;

  updateTag() {
    if (this.dataSource) {
      let arr = (this.type === '-' ? this.dataSource[0] : this.dataSource[1]);
      Object.keys(arr).forEach(value => {
        Vue.set(this.arrTag, value, arr[value]);
      });
      labelListModel.save(this.arrTag);
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
    tagListModel.destroy(id);
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
  overflow: auto;

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

    .add {
      span {
        padding-right: 10px;
      }

      .icon {
        margin: 0
      }
    }
  }

}
</style>