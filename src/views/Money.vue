<template>
  <Layout class-prefix="layout">
    <div class="numberPad clearfix">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
    <div class="notes">
      <Icon name="note"/>
      <input type="text" placeholder="备注">
      <div class="time">2021.11.15</div>
    </div>
    <div class="tags">
      <ul class="current">
        <li>
          <Icon name="rent"/>
          房租
        </li>
        <li>
          <Icon name="cloth"/>
          穿衣
        </li>
        <li>
          <Icon name="transport"/>
          出行
        </li>
        <li>
          <Icon name="alcohol"/>
          酒水
        </li>
        <li>
          <Icon name="travel"/>
          旅游
        </li>
        <li>
          <Icon name="friend"/>
          人情
        </li>
        <li>
          <Icon name="snack"/>
          零食
        </li>
        <li>
          <Icon name="study"/>
          学习
        </li>
        <li>
          <Icon name="eat"/>
          吃饭
        </li>
        <li>
          <Icon name="recreation"/>
          娱乐
        </li>
        <li class="new">
          <Icon name="add"/>
          编辑
        </li>
      </ul>
    </div>
    <div class="output">
      100
    </div>
    <div>
      <ul class="types">
        <li>收入</li>
        <li class="selected">支出</li>
      </ul>
    </div>
  </Layout>
</template>

<script lang="ts">

export default {
  name: 'Money',
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

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

.notes {
  display: flex;
  font-size: 14px;
  background-color: #f5f5f5;
  align-items: center;

  input {
    padding: 16px 0;
    background-color: transparent;
    border: none;
    outline: 0;
    flex-grow: 1;
  }

  .icon {
    width: 24px;
    height: 24px;
    margin-left: 16px;
    margin-right: 5px;
  }

  .time {
    padding-right: 16px;
  }
}

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

.output {
  font-size: 30px;
  background-color: #B2D5F5;
  font-family: Consolas, monospace;
  text-align: right;
  padding: 2px 16px;
  //box-shadow:inset 0 0 3px fade-out(#B2D5F5,0.5);
}

.numberPad {
  @extend %clearfix;

  button {
    @extend %outerShadow;
    float: left;
    width: 25%;
    height: 54px;
    outline: none;
    border: none;

    &.ok {
      height: 54*2px;
      float: right;
    }

    &.zero {
      width: 50%;
    }
  }
}
</style>