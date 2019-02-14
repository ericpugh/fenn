<template>
  <h1>This is a hunt!</h1>
</template>

<script>
  import FillInTheBlankClue from '@/components/FillInTheBlankClue.vue'
  import CheckOffClue from '@/components/CheckOffClue.vue'

  export default {
  name: 'Hunt',
  props: {
    // TODO: pass the hunt data from $app.hunts
  },
  components: {
    FillInTheBlankClue,
    CheckOffClue
  },

  created () {
    // TODO: build the clue list, stored in vuex with a completed/not-completed status.

  }
}
</script>

<style scoped lang="scss">
</style>
