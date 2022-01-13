<template>
  <Layout class="labelTag">
    <LabelHead/>
    <Tabs :data-source="recordTypeList" :value.sync="labelTypeValue"/>
    <LabelTags/>
  </Layout>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import LabelTags from '@/components/Labels/LabelTags.vue';
import LabelHead from '@/components/Labels/LabelHead.vue';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {LabelHead, LabelTags, Tabs}
})
export default class Labels extends Vue {
  labelTypeValue = '-';
  recordTypeList = recordTypeList;
}

</script>

<style scoped lang="scss">
.labelTag{
}
</style>