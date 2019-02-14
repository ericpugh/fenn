<template>
  <ul class="list" v-if="hunts">
    <li v-for="hunt in hunts" :key="hunt.id" class="hunt">
      <img v-if="hunt.assets.images" :src="hunt.assets.images.thumbnail" />
      <h3>{{ hunt.title}}</h3>
      <p>{{ hunt.description }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HuntList',
  props: {
    hunts: Array
  },
  methods: {

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
