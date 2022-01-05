<template>
  <Layout class="labelTag">
    <div>
      <LabelHead/>
      <types :value.sync="labelTypeValue"/>
    </div>
    <LabelTags/>
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
}

</script>

<style scoped lang="scss">
</style>