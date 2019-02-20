<template>
    <v-card :class="{ solved : solved }">
        <v-flex xs12 sm8 md6 offset-sm2 offset-md3 pa-3>
            <v-img v-if="task.image" :src="task.image"></v-img>
        </v-flex>
        <v-card-title>
            <v-avatar color="primary" class="mr-3">
                <span class="white--text headline">{{ taskNumber + 1}}</span>
            </v-avatar>
            <h2>{{ task.title}}</h2>
        </v-card-title>
        <v-card-text v-html="task.instructions"></v-card-text>
        <v-card-actions>
            <component :is="task.type" :task="task" :task-number="taskNumber" :parent-id="parentId"></component>
        </v-card-actions>
    </v-card>
</template>

<script>
    import TextAnswerTask from '@/components/TextAnswerTask.vue'
    import NumberAnswerTask from '@/components/NumberAnswerTask.vue'
    import OnOffTask from '@/components/OnOffTask.vue'
    export default {
        name: 'Task',
        components: {
            TextAnswerTask,
            NumberAnswerTask,
            OnOffTask
        },
        props: {
            task: Object,
            taskNumber: Number,
            parentId: String
        },
        computed: {
            solved: function () {
                return this.$store.getters['hunts/getTaskCompleted'](this.parentId, this.taskNumber);
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-card.solved {
        background-color: black !important;
    }
</style>
