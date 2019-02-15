<template>
  <div grid-list-md>
    <VLayout row wrap>
      <VFlex v-for="hunt in hunts" :key="hunt.id" xs12 sm4 m3>
        <VCard :to="{ name: 'hunt', params: { id: hunt.id }}">
          <VImg v-if="hunt.assets.images" :src="hunt.assets.images.thumbnail"></VImg>
          <VCardTitle primary-title>
            <div>
              <h3 class="headline mb-0">{{ hunt.title}}</h3>
              <div v-html="hunt.description"></div>
            </div>
          </VCardTitle>
          <VCardActions>
            <VBtn flat color="orange">Go!</VBtn>
          </VCardActions>
        </VCard>
      </VFlex>
    </VLayout>
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
