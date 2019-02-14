<template>
  <div class="home">
    <header class="welcome">
      <img :alt="$app.title + ' Logo'" class="logo default-logo" src="../assets/logo.png">
      <h1>{{ $app.title }}</h1>
      <p>{{ $app.welcome }}</p>
    </header>
    <HuntList/>
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
    console.log('App Data:');
    console.log(this.$app);
  }

}
</script>

<style lang="scss">
  .home .welcome {
    text-align: center;
    background: #EFEFEF;
    padding: 1rem;
  }
</style>