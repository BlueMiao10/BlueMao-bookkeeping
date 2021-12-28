<template>
  <div class="outputNumber">
    <div class="output">
      {{ display }}
    </div>
  </div>
</template>

<script>
import EventBus from '@/eventBus.ts';

export default {
  name: 'Output',

  data() {
    return {
      display: '0',
      xxx: ''
    };
  },
  created() {
    EventBus.$on('output', data => {
      this.display = data;
    });
  }
};
</script>

<style scoped lang="scss">

.output {
  flex-grow: 1;
  font-size: 30px;
  font-family: Consolas, monospace;
  text-align: right;
  padding: 2px 16px;
  background-color: #B2D5F5;
}

.viewSelected {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  margin-left: 10px;

  > ::v-deep .icon {
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }
}
</style>