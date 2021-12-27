<template>
  <div class="tags">
    <ul class="current">
      <li>
        <Icon name="salary"/>
        工资
      </li>
      <li>
        <Icon name="bonus"/>
        奖金
      </li>
      <li>
        <Icon name="reimburse"/>
        报销
      </li>
      <li>
        <Icon name="invest"/>
        投资
      </li>
      <li>
        <Icon name="envelope"/>
        红包
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tag2'
};
</script>

<style scoped lang="scss">
.tags {
  flex-grow: 1;

  .current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;

    li {
      display: flex;
      width: 20%;
      align-items: center;
      flex-direction: column;
      font-size: 13px;
      padding: 10px 0;

      .icon {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>