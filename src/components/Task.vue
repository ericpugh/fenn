<template>
    <v-card class="task" :class="{ solved : solved }">
        <task-completed-overlay v-show="solved"></task-completed-overlay>
        <v-card-title>
            <v-avatar color="primary" class="mr-3">
                <span class="white--text headline">{{ taskNumber + 1}}</span>
            </v-avatar>
            <h2>{{ task.title}}</h2>
        </v-card-title>
        <v-card-text>
            <v-flex xs12 sm8 md6 offset-sm2 offset-md3 pa-3>
                <v-img v-if="task.image" :src="task.image"></v-img>
            </v-flex>
            <div class="instructions" v-html="task.instructions"></div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <component
                    :is="task.type"
                    :task="task"
                    :task-number="taskNumber"
                    :parent-id="parentId"
                    v-on:task:completed="onTaskCompleted"
                    v-on:task:incorrect="onTaskIncorrect">
            </component>
            <v-flex v-if="task.solution.answer" xs12 class="cheat"><v-icon>mood</v-icon> Cheat Code: {{ task.solution.answer }}</v-flex>
        </v-card-actions>
        <v-snackbar v-model="incorrectMessageVisible" :bottom="true" :multi-line="true" color="error" :timeout="timeout">
            <v-icon color="white">sentiment_dissatisfied</v-icon>
            {{ task.solution.incorrect }}
            <v-btn dark flat v-on:click="incorrectMessageVisible = false">Close</v-btn>
        </v-snackbar>
        <v-snackbar v-model="correctMessageVisible" :bottom="true" :multi-line="true" color="success" :timeout="timeout">
            <v-icon color="white">sentiment_very_satisfied</v-icon>
            {{ task.solution.correct }}
            <v-btn dark flat v-on:click="correctMessageVisible = false">Close</v-btn>
        </v-snackbar>
    </v-card>
</template>

<script>
    import TaskCompletedOverlay from '@/components/TaskCompletedOverlay.vue'
    import TextAnswerTask from '@/components/TextAnswerTask.vue'
    import NumberAnswerTask from '@/components/NumberAnswerTask.vue'
    import SelectAnswerTask from '@/components/SelectAnswerTask.vue'
    import OnOffTask from '@/components/OnOffTask.vue'
    export default {
        name: 'Task',
        components: {
            TaskCompletedOverlay,
            TextAnswerTask,
            NumberAnswerTask,
            SelectAnswerTask,
            OnOffTask
        },
        props: {
            task: Object,
            taskNumber: Number,
            parentId: String,
        },
        data: () => ({
            incorrectMessageVisible: false,
            correctMessageVisible: false,
            timeout: 2500
        }),
        methods: {
            onTaskCompleted: function() {
                // Set the task to completed.
                this.correctMessageVisible = true;
                this.$store.commit('hunts/SET_TASK_COMPLETED', { id : this.parentId, index : this.taskNumber });
            },
            onTaskIncorrect: function () {
                this.incorrectMessageVisible = true;
                setTimeout(() => { this.incorrect = false;}, this.timeout);
            }
        },
        computed: {
            solved: function () {
                return this.$store.getters['hunts/getTaskCompleted'](this.parentId, this.taskNumber);
            }
        }
    }
</script>

<style scoped lang="scss">
    .v-card.task {
        margin-bottom: 1rem;
        .v-card__actions {
            background-color: #f8faff;
        }
    }
</style>
