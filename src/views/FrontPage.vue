<template>
  <Layout class="frontPage">
    <div class="background"></div>
    <div class="bookKeeping" @click="enter">
      <Icon name="bookKeeping" class="box"/>
    </div>
    <div class="tip" v-if="recordList.length === 0">快开始记账吧</div>
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
  get recordList() {
    return this.$store.state.recordList;
  }

  enter() {
    const a = document.querySelector('.box') as HTMLElement;
    a.classList.add('selected');
    setTimeout(() => {
      a.classList.remove('selected');
      this.$router.replace('/money');
    }, 300);
  }

  created() {
    this.$store.commit('fetchRecords');
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/style/helper';

.frontPage {
  @extend %clearfix;
  text-align: center;

  .background {
    width: 100%;
    height: 20vh;
    overflow: hidden;
    background: url("../assets/background.png") no-repeat center center;
    background-size: cover;
    opacity: 0.9;
    text-align: center;
    padding-top: 25px;
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

.tip {
  margin-top: 10vh;
  color: #e6e6e6;
  font-size: 24px;
}
</style>