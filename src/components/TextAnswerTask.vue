<template>
    <v-container class="task">
        <v-layout row wrap>
            <v-flex xs12>
                <div v-if="task.question.text" class="question">{{ task.question.text }}</div>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs12>
                <v-form ref="form" lazy-validation>
                    <v-text-field v-model="answer" :rules="rules" name="answer" prepend-outer-icon="help-outline" outline required single-line clearable></v-text-field>
                    <v-btn :disabled="solved" color="accent" @click="submit">Submit</v-btn>
                </v-form>
                <v-alert v-model="correct" type="success" color="secondary">{{ task.solution.correct }}</v-alert>
                <!--<v-alert v-model="!correct" type="error" color="danger">{{ task.solution.incorrect }}</v-alert>-->
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'TextAnswerTask',
        props: {
            task: Object,
            title: String,
            instructions: String
        },
        data: () => ({
            valid: true,
            solved: false,
            correct: false,
            answer: ''
        }),
        methods: {
            submit: function (event) {
                console.log(this.answer);
                console.log(this.task.solution.answer);

                if (this.answer === this.task.solution.answer) {
                    this.correct = this.solved = true;
                }

                // if (this.$refs.form.validate()) {
                    // TODO: update store when "solved"

                // }
            },
            // getTaskAnswer: function() {
            //     console.log(task.solution.answer);
            //     return task.solution.answer;
            // },
            // getTaskCorrectMessage: function() {
            //     return task.solution.correct;
            // },
            // getTaskIncorrectMessage: function() {
            //     return task.solution.incorrect;
            // }
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
        }

        // TODO: update store when "solved"

    }
</script>

<style lang="scss">

</style>