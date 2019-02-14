<template>
  <ul class="list hunt-list" v-if="hunts">
    <router-link :to="{ name: 'hunt', params: { id: hunt.id }}" v-for="hunt in hunts" :key="hunt.id">
      <li>
        <img v-if="hunt.assets.images" :src="hunt.assets.images.thumbnail" />
        <h3>{{ hunt.title}}</h3>
        <p>{{ hunt.description }}</p>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'HuntList',
  props: {
    // TODO: add a validation method on hunts, or remove if the app data for a hunt is not valid?
    hunts: Array
  }
}
</script>

<style scoped lang="scss">
  h3 {}
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 1rem 0;
    padding: 1rem;
    border-bottom: 1px solid #EFEFEF;
    img {
      border-radius: 5px;
    }
  }
  a {
    color: #42b983;
  }
</style>
