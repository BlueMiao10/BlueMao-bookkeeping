<template>
  <Layout class="frontPage">
    <div class="background">
      <span class="dayKeeping" @click="select">日常账本</span>
      <span class="dayKeeping selected" @click="select2">余额：1880元</span>
    </div>
    <div class="bookKeeping" @click="enter">
      <Icon name="bookKeeping" class="box"/>
    </div>
    <div class="container">
      <display-left/>
      <display-right/>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Display from '@/components/FrontPage/displayLeft.vue';
import DisplayLeft from '@/components/FrontPage/displayLeft.vue';
import DisplayRight from '@/components/FrontPage/displayRight.vue';

@Component({
  components: {DisplayRight, DisplayLeft, Display}
})
export default class FrontPage extends Vue {
  enter() {
    const a = document.querySelector('.box') as HTMLElement;
    a.classList.add('selected');
    setTimeout(() => {
      a.classList.remove('selected');
      this.$router.replace('/money');
    }, 300);
  }

  select() {
    const b = document.querySelectorAll('.dayKeeping');
    b[1].classList.remove('selected');
    b[0].classList.add('selected');
  }

  select2() {
    const b = document.querySelectorAll('.dayKeeping');
    b[0].classList.remove('selected');
    b[1].classList.add('selected');
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/style/helper';

.frontPage {
  @extend %clearfix;
  overflow: hidden;

  .background {
    width: 100%;
    height: 20vh;
    overflow: hidden;
    background: url("../assets/background.png") no-repeat center center;
    background-size: cover;
    opacity: 0.9;
    text-align: center;
    padding-top: 25px;

    .dayKeeping {
      color: rgba(245, 241, 241, 0.8);
      display: inline-block;
      padding: 2px 10px;
      box-shadow: 0 0 1px 1px rgba(224, 216, 216, 0.6);
      border-radius: 20px;
      background-color: rgba(116, 111, 111, 0.5);
    }

    .dayKeeping.selected {
      display: none;
    }
  }

  .bookKeeping {
    float: left;
    position: relative;
    left: 50%;
    border-radius: 50%;
    margin-top: -6vh;
    transform: translateX(-50%);
    background-color: white;

    .icon {
      float: left;
      position: relative;
      width: 80px;
      height: 80px;
      margin: 8px;
      transition: all .3s;

      &.selected {
        transform: rotate(-90deg);
      }
    }
  }

  .container {
    @extend %clearfix;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }

}
</style>