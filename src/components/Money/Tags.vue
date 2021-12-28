<template>
  <div class="tags">
    <Output/>
    <Tag2 v-if="type === '+'"/>
    <Tag1 v-else/>
  </div>
</template>

<script>
import Tag1 from '@/components/Money/Tag1.vue';
import Tag2 from '@/components/Money/Tag2.vue';
import EventBus from '@/eventBus';
import Output from '@/components/Money/Output.vue';

export default {
  name: 'Tags',
  components: {Output, Tag2, Tag1},

  data() {
    return {
      type: ''
    };
  },
  created() {
    EventBus.$on('type', data => {
      this.type = data;
    });
  }
};
</script>

<style scoped lang="scss">
.tags {
  flex-grow: 1;
}
</style>