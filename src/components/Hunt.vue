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
      <v-flex v-if="hunt.tasks.length > 0" xs12>
        <div v-for="(task, index) in hunt.tasks" :key="index">
          <task :task="task" :task-number="index" :parent-id="hunt.id"></task>
        </div>
      </v-flex>
      <v-flex v-else xs12>
        <v-alert :value="true" type="info" color="secondary" icon="sentiment_dissatisfied">
          No tasks have been created for this scavenger hunt yet.
        </v-alert>
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
    methods: {},
    computed: {
      hunt: function () {
        return this.$store.getters['hunts/getHuntById'](this.$route.params.id);
      },
      completed: function () {
        let tasks = this.$store.getters['hunts/getTasks'](this.$route.params.id);
        let incomplete = _.filter(tasks, function(o) { return !o.complete; });
        return incomplete.length === 0 ? true : false;
      }
    },
    watch: {
      completed: function(completed) {
        if (completed) {
          this.$store.commit('hunts/SET_HUNT_COMPLETED', this.$route.params.id);
          // Congratulatory "confetti" when user completes a hunt.
          this.$confetti.start({
            shape: 'rect',
            size: 20,
            dropRate: 15,
            colors: ['DodgerBlue', 'Gold', 'pink', 'SlateBlue', 'lightblue', 'Violet', 'PaleGreen', 'SteelBlue', 'Crimson', 'White']
          });
          setTimeout(() => { this.$confetti.stop() }, 4000);
        }
      }
    },
    mounted() {
      //TODO: set active hunt (which should also remove active status from all other hunts)
    }
  }
</script>

<style scoped lang="scss">
</style>
