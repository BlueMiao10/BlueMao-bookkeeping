<template>
  <el-page-header @back="goBack" content="编辑标签"></el-page-header>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class LabelHead extends Vue {
  goBack() {
    this.$router.replace('/money');
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.el-page-header {
  margin: 10px 10px;
}
</style>