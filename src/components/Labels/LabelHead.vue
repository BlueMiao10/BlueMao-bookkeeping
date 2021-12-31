<template>
  <div class="labelHead">
    <router-link to="/money">
      <icon name="left"/>
    </router-link>
    <span>编辑标签</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';


@Component
export default class LabelHead extends Vue {

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.labelHead {
  @extend %clearfix;
  text-align: center;
  position: relative;
  padding-top: 10px;

  .icon {
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translateY(-50%);
  }

  span {
    display: block;
    padding-bottom: 6px;
  }
}
</style>