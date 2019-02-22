<template>
    <v-container class="task">
        <v-layout class="question" row wrap>
            <v-flex xs12>
                <div v-if="task.question.text" class="question">
                    {{ task.question.text }}
                    <task-hint-dialog :message="task.question.hint"></task-hint-dialog>
                </div>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs12>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field v-model="answer" :disabled="answered" :rules="rules" name="answer" prepend-outer-icon="help-outline" outline required single-line clearable></v-text-field>
                    <v-btn :disabled="answered" color="accent" @click="submit">Submit</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import TaskHintDialog from "./TaskHintDialog";
    export default {
        name: 'TextAnswerTask',
        components: {TaskHintDialog},
        props: {
            task: Object,
            taskNumber: Number,
            parentId: String
        },
        data: () => ({
            valid: true,
            answered: false,
            answer: ''
        }),
        methods: {
            submit: function () {
                if ( this.answer === this.task.solution.answer || this.task.solution.requirement === "ambiguous") {
                    this.answered = true;
                    this.$emit('task:completed');
                    this.$refs.form.resetValidation();
                }
                else {
                    this.$emit('task:incorrect');
                }
            },
        },
        computed: {
            rules () {
                const rules = []
                const required = v => !!v || 'Answer is required'
                rules.push(required())
                return rules
            }
        }
    }
</script>

<style lang="scss">


</style>