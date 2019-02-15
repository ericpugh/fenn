<template>
  <VApp id="app">
    <!--TODO: move drawer to it's own component and pull hunt data from store?-->
    <VNavigationDrawer v-model="drawer" absolute temporary>
      <VList dense>
        <VListTile to="/">
          <VListTileAction>
            <VIcon>dashboard</VIcon>
          </VListTileAction>
          <VListTileContent>
            <VListTileAction>Home</VListTileAction>
          </VListTileContent>
        </VListTile>
      </VList>
      <VDivider/>
      <VList dense>
        <VListTile :to="{ name: 'hunt', params: { id: hunt.id }}" v-for="hunt in $app.hunts" :key="hunt.id">
          <VListTileAction>
            <VIcon>place</VIcon>
          </VListTileAction>
          <VListTileContent>
            <VListTileAction>{{ hunt.title }}</VListTileAction>
          </VListTileContent>
        </VListTile>
      </VList>
      <VDivider/>
    </VNavigationDrawer>
    <VToolbar app dark fixed clipped-left dense>
      <VToolbarSideIcon @click.stop="drawer = !drawer"></VToolbarSideIcon>
      <VToolbarTitle ml-10px>{{ $app.title }}</VToolbarTitle>
      <VSpacer></VSpacer>
      <VToolbarItems>
        <VDialog v-if="$app.about" v-model="dialog">
          <VBtn slot="activator" icon>
            <VIcon medium>info</VIcon>
          </VBtn>
          <VCard>
            <VCardTitle class="headline secondary" primary-title>
              <VBtn icon @click="dialog = false">
                <VIcon>close</VIcon>
              </VBtn>
              About
            </VCardTitle>
            <VCardText v-html="$app.about"></VCardText>
          </VCard>
        </VDialog>
      </VToolbarItems>
    </VToolbar>
    <VContent>
      <VContainer fluid>
        <VFadeTransition mode="out-in">
          <RouterView></RouterView>
        </VFadeTransition>
      </VContainer>
    </VContent>
  </VApp>
</template>

<script>
  export default {
    name: "app",
    data: () => ({
      drawer: false,
      dialog: false
    }),
    created() {
      // Set the initial hunts data in state.
      this.$store.commit('hunts/SET', this.$app.hunts);
    }
  };
</script>

<style lang="scss">

</style>
