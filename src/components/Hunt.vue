<template>
  <div :id="hunt.id" class="hunt">
    <v-layout row wrap xs10 offset-xs1>
      <!--TODO: How to "page" between or show/hide individual Tasks?-->
      <v-flex>
        <h1 v-html="hunt.title" class="display-3"></h1>
        <div v-html="hunt.instructions"></div>
        <v-divider/>
      </v-flex>
      <!--TODO: Display tasks as a "list" showing all tasks, or as a "sequence" showing one card at a time.-->
      <v-flex xs12>
        <div v-for="(task, index) in hunt.tasks" :key="index">
          <task :task="task" :task-number="index" :parent-id="hunt.id"></task>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import Task from '@/components/Task.vue'
  export default {
    name: 'Hunt',
    components: {
      Task,
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
