<template>
  <Layout class-prefix="layout">
    <Numberpad/>
    <Notes/>
    <Tags/>
    <Types/>
  </Layout>
</template>

<script>

import NumberPad from '@/components/Money/Numberpad.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';

export default {
  name: 'Money',
  components: {Types, Tags, Notes, Numberpad: NumberPad},
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style scoped lang="scss">
</style>