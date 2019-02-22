<template>
  <v-app id="app">
    <!--TODO: move drawer to it's own component? -->
    <v-navigation-drawer v-model="drawer" app temporary>

      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-action>Home</v-list-tile-action>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="resetConfirmDialog = true">
          <v-dialog v-model="resetConfirmDialog" width="75%" light>
            <v-card>
              <v-card-title class="headline" primary-title>
                Are you sure you want to start over?
              </v-card-title>
              <v-card-text>
                This will clear all your completed Scavenger Hunt information.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="resetConfirmDialog = false">
                  Close
                </v-btn>
                <v-btn color="primary" flat @click="resetConfirmDialog = false; reset();">
                  Start over
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-list-tile-action>
            <v-icon>restore</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-action>Start over</v-list-tile-action>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-group prepend-icon="map" value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title>Scavenger Hunts</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="hunt in hunts" :key="hunt.id" :to="{ name: 'hunt', params: { id: hunt.id }}">
            <v-list-tile-content>
              <v-list-tile-title>{{ hunt.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="isHuntCompleted(hunt.id)">
              <v-icon>done</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
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
      dialog: false,
      resetConfirmDialog: false
    }),
    methods: {
      reset: function () {
        this.$store.commit('hunts/SET', this.$app.hunts);
      },
      isHuntCompleted: function (id) {
        return this.$store.getters['hunts/getHuntCompleted'](id);
      }
    },
    computed: {
      hunts: function () {
        return this.$store.getters['hunts/getHunts'];
      }
    },
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
