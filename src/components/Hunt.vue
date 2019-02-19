<template>
  <div :id="hunt.id" class="hunt">
    <v-layout row wrap>
      <!--TODO: How to "page" between or show/hide individual Tasks?-->
      <v-flex xs12>
        <h1 v-html="hunt.title" class="display-3"></h1>
        <div v-html="hunt.instructions"></div>
        <v-divider/>
      </v-flex>
      <v-flex xs12>
        <v-card v-for="(task, index) in hunt.tasks" :key="index">
          <v-card-title>
            <v-avatar color="primary">
              <span class="white--text headline">{{ index + 1}}</span>
            </v-avatar>
            <h2>{{ task.title}}</h2>
          </v-card-title>
          <v-card-text v-html="task.instructions"></v-card-text>
          <v-card-actions>
            <component :is="task.type" :task="task"></component>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import TextAnswerTask from '@/components/TextAnswerTask.vue'
  import NumberAnswerTask from '@/components/NumberAnswerTask.vue'
  import OnOffTask from '@/components/OnOffTask.vue'
  export default {
    name: 'Hunt',
    components: {
      TextAnswerTask,
      NumberAnswerTask,
      OnOffTask
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
