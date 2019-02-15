<template>
  <div class="home">
    <VLayout row wrap>
      <VFlex xs12>
        <h1 v-html="$app.title" class="display-3"></h1>
        <div v-html="$app.welcome" class="display-1"></div>
        <VDivider/>
      </VFlex>
      <VFlex>
        <HuntList v-bind:hunts="$app.hunts"/>
      </VFlex>
    </VLayout>
  </div>
</template>

<script>
import HuntList from '@/components/HuntList.vue'
export default {
  name: 'home',
  components: {
    HuntList
  },
  created () {
    // console.log('App Data:');
    // console.log(this.$app);
  }
}
</script>

<style lang="scss">
  .home {}
</style>