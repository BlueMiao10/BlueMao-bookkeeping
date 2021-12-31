<template>
  <Layout class="labelTag">
    <LabelHead/>
    <types :value.sync="labelTypeValue"/>
    <LabelTags/>
<!--    <LabelTagPay v-if="labelTypeValue === '-'"/>-->
<!--    <LabelTagIncome  v-if="labelTypeValue === '+'"/>-->
  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import LabelTags from '@/components/Labels/LabelTags.vue';
import Types from '@/components/Money/Types.vue';
import LabelHead from '@/components/Labels/LabelHead.vue';


@Component({
  components: { LabelHead, Types, LabelTags}
})
export default class Labels extends Vue {
  labelTypeValue = '-';
}

</script>

<style scoped lang="scss">
.label {
  padding: 0 3px;

  .labelAdd {
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