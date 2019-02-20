<template>
  <div grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="hunt in hunts" :key="hunt.id" xs12 sm4 m3 pa-3 mb-2>
        <v-card :to="{ name: 'hunt', params: { id: hunt.id }}">
          <v-img v-if="hunt.assets.images" :src="hunt.assets.images.large"></v-img>
          <v-card-title class="headline" primary-title>{{ hunt.title }}</v-card-title>
          <v-card-text v-html="hunt.description"></v-card-text>
          <v-card-actions>
            <v-btn flat color="accent">Go!</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
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

</style>
