<template>
  <nav>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="detailed"/>
      明细
    </router-link>
    <router-link to="/frontPage" class="item" active-class="selected">
      <Icon name="money"/>
      记一笔
    </router-link>
    <router-link to="/charts" class="item" active-class="selected">
      <Icon name="statistics"/>
      图表
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
  font-size: 12px;
  padding-top: 2px;
  border-top: 1px solid rgba(186, 182, 182, 0.3);
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