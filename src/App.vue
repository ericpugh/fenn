<template>
  <v-app id="app">
    <!--TODO: move drawer to it's own component? -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-action>Home</v-list-tile-action>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider/>
      <v-list dense>
        <v-list-tile :to="{ name: 'hunt', params: { id: hunt.id }}" v-for="hunt in $app.hunts" :key="hunt.id">
          <v-list-tile-action>
            <v-icon>map</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-action>{{ hunt.title }}</v-list-tile-action>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider/>
    </v-navigation-drawer>
    <v-toolbar color="primary" app dark fixed clipped-left dense>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title white--text ml-10px>{{ $app.title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-dialog v-if="$app.about" v-model="dialog" width="75%" light>
          <v-btn slot="activator" icon>
            <v-icon medium>info</v-icon>
          </v-btn>
          <v-card>
            <v-card-title class="headline" primary-title>
              <v-btn icon @click="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
              About
            </v-card-title>
            <VCardText v-html="$app.about"></VCardText>
          </v-card>
        </v-dialog>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "App",
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
  .cheat {
    font-size: smaller;
  }
</style>
