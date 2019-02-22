<template>
    <v-container class="task">
        <v-layout class="question" row wrap>
            <v-flex xs12>
                <div v-if="task.question.text" class="question">{{ task.question.text }}</div>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs12>
                <v-form ref="form" lazy-validation>
                    <v-text-field v-model="answer" :disabled="answered" :rules="rules" type="number" name="answer" outline single-line ></v-text-field>
                    <v-btn :disabled="answered" color="accent" @click="submit">Submit</v-btn>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'NumberAnswerTask',
        props: {
            task: Object,
            title: String,
            instructions: String
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
                const required = v => !isNaN(parseFloat(v)) || 'Answer is required and must be a number'
                rules.push(required())
                return rules
            }
        }
    }
</script>

<style lang="scss">

</style>