<template>
  <div :id="hunt.id" class="hunt">
    <VLayout row wrap>
      <!--TODO: Maybe individual Hunts/Clues should be a "sheet" component?-->
      <VFlex xs12>
        <h1 v-html="hunt.title" class="display-3"></h1>
        <div v-html="hunt.instructions"></div>
        <VDivider/>
      </VFlex>
      <VFlex xs12>
        <VCard v-for="(clue, index) in hunt.clues" :key="index">
          <VCardTitle>{{ clue.title}}</VCardTitle>
          <VCardText v-html="clue.instructions"></VCardText>
          <VCardActions>
            <component :is="clue.type" :data="clue"></component>
          </VCardActions>
        </VCard>
      </VFlex>
    </VLayout>
  </div>
</template>

<script>
  import FillInTheBlankClue from '@/components/FillInTheBlankClue.vue'
  import CheckOffClue from '@/components/CheckOffClue.vue'
  export default {
  name: 'Hunt',
  components: {
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
