<template>
  <div class="output">
    {{ display }}
  </div>
</template>

<script lang="ts">
import EventBus from '@/eventBus.ts';

export default {
  name: 'Output',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      display: '0'
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    EventBus.$on('output', data => {
      this.display = data;
    });
  }
};
</script>

<style scoped lang="scss">
.output {
  font-size: 30px;
  background-color: #B2D5F5;
  font-family: Consolas, monospace;
  text-align: right;
  padding: 2px 16px;
  //box-shadow:inset 0 0 3px fade-out(#B2D5F5,0.5);
}
</style>