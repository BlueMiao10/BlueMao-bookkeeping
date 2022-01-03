<template>
  <Layout class="labelTag">
    <div>
      <LabelHead/>
      <types :value.sync="labelTypeValue"/>
    </div>
    <LabelTags :data-source="labelTags"/>
  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import LabelTags from '@/components/Labels/LabelTags.vue';
import Types from '@/components/Money/Types.vue';
import LabelHead from '@/components/Labels/LabelHead.vue';

@Component({
  components: {LabelHead, Types, LabelTags}
})
export default class Labels extends Vue {
  labelTypeValue = '-';
  labelTags = [{
    '一般': 'recreation', '房租': 'rent', '穿衣': 'cloth', '出行': 'transport', '酒水': 'alcohol', '旅游': 'travel', '人情': 'friend',
    '零食': 'snack', '学习': 'study', '吃饭': 'eat'
  }, {'一般': 'recreation', '投资': 'invest', '工资': 'salary', '红包': 'envelope', '报销': 'reimburse', '奖金': 'bonus'}];
}

</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.labelTag {
  @extend %clearfix;

  div {
    @extend %clearfix;
  }
}
</style>