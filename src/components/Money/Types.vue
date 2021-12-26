<template>
  <div>
    <ul class="types">
      <li :class=" type === '+' && 'selected' ">收入</li>
      <li :class=" type === '-' && 'selected' " @click="selectType('-')">支出</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Types',
  data() {
    return {
      type: '-' //'-'代表支出，'+'代表收入
    };
  },
  methods: {
    selectType(type) {  //type只能是 +/- 中的一个，如果不是其中的一个，就会抛出错误
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.type = type;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.types {
  display: flex;
  font-size: 16px;
  justify-content: center;

  li {
    margin: 5px 16px;

    &.selected {
      color: $color-highlight;
    }
  }
}
</style>