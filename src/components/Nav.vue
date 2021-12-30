<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';

export default {
  name: 'Nav',
  component: {Icon}
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  flex-direction: row;
  //border-top: 1px solid #e6e6e6;
  font-size: 12px;
  > .item {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px 0;
    .icon{
      width: 28px;
      height: 28px;
    }
  }
  .item.selected{
    color: $color-highlight;
  }
}

</style>