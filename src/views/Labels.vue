<template>
  <Layout>
    <LabelHead/>
    <types :value.sync="labelTypeValue"/>
    <LabelTags/>
    <ol class="label">
      <li v-for="tag in tags" :key="tag">
        {{ tag }}
      </li>
      <li>
        <span >添加新的标签</span>
        <Icon name="right" class="right"/>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import LabelTags from '@/components/Labels/LabelTags.vue';
import Types from '@/components/Money/Types.vue';
import LabelHead from '@/components/Labels/LabelHead.vue';
import tagListModel from '@/models/tagListModel';

@Component({
  components: {LabelHead, Types, LabelTags}
})
export default class Labels extends Vue {
  labelTypeValue = '-';
  tags = tagListModel.fetch();
}
</script>

<style scoped lang="scss">
.label {
  padding: 0 3px;

  li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    padding-left: 10px;

    .right {
      margin-right: 10px;
      width: 16px;
      height: 16px;
    }
  }
}
</style>