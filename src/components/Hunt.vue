<template>
  <div :id="hunt.id" class="hunt">
    <Jumbotron :title="hunt.title" :welcome="hunt.description" />
  </div>
</template>

<script>
  import Jumbotron from '@/components/Jumbotron.vue'
  import FillInTheBlankClue from '@/components/FillInTheBlankClue.vue'
  import CheckOffClue from '@/components/CheckOffClue.vue'

  export default {
  name: 'Hunt',
  components: {
    Jumbotron,
    FillInTheBlankClue,
    CheckOffClue
  },
  computed: {
    hunt: function () {
      return this.$store.getters['hunts/getHuntById'](this.$route.params.id);
    }
  }
  // TODO: add a watcher on the computed hunt to make "active hunt" etc.
}
</script>

<style scoped lang="scss">
</style>
