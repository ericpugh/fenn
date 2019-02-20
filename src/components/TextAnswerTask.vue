<template>
    <v-container class="task">
        <v-layout row wrap>
            <v-flex xs12>
                <div v-if="task.question.text" class="question">{{ task.question.text }}</div>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs12>
                <p class="cheat">Cheat Code: {{ task.solution.answer }}</p>
                <v-form ref="form">
                    <v-text-field :disabled="correct" v-model="answer" name="answer" prepend-outer-icon="help-outline" outline required single-line clearable></v-text-field>
                    <v-btn :disabled="correct" color="accent" @click="submit">Submit</v-btn>
                </v-form>
                <!-- TODO: move snackbar to it's own component? -->
                <v-snackbar v-model="incorrect" :bottom="true" :multi-line="true" :timeout="2000">
                    <v-icon color="accent" left>error_outline</v-icon>
                    {{ task.solution.incorrect }}
                </v-snackbar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'TextAnswerTask',
        props: {
            task: Object,
            taskNumber: Number,
            parentId: String
        },
        data: () => ({
            valid: true,
            correct: false,
            incorrect: false,
            answer: ''
        }),
        methods: {
            submit: function () {
                this.incorrect = false;
                if (this.answer === this.task.solution.answer) {
                    this.correct = true;
                    this.setCompleted();
                }
                else {
                    this.incorrect = true;
                }

            },
            setCompleted: function() {
                // Set the task to completed.
                this.$store.commit('hunts/SET_TASK_COMPLETED', { id : this.parentId, index : this.taskNumber });
            }
        },
        computed: {
            rules () {
                const rules = []
                const required = v => !!v || 'Answer is required'
                rules.push(required())
                // const match = v => v === this.task.solution.answer || this.task.solution.incorrect
                // rules.push(match)
                return rules
            }
        },
    }
</script>

<style lang="scss">


</style>