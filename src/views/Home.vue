<template>
  <div class="home">
    <Jumbotron :title="$app.title" :welcome="$app.welcome" />
    <HuntList v-bind:hunts="$app.hunts"/>
  </div>
</template>

<script>
import HuntList from '@/components/HuntList.vue'
import Jumbotron from '@/components/Jumbotron.vue'
export default {
  name: 'home',
  components: {
    Jumbotron,
    HuntList
  },
  created () {
    console.log('App Data:');
    console.log(this.$app);
  }
}
</script>

<style lang="scss">
  .home {}
</style>