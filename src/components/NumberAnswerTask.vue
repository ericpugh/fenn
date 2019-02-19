<template>
    <v-container class="task">
        <v-layout row wrap>
            <v-flex xs12>
                <div v-if="task.question.text" class="question">{{ task.question.text }}</div>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs12>
                <v-form ref="form" lazy-validation>
                    <v-text-field v-model="answer" :rules="rules" type="number" name="answer" outline single-line ></v-text-field>
                    <v-btn :disabled="!valid" color="success" @click="submit">Submit</v-btn>
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
            answer: '',
            rules: [
                v => !isNaN(parseFloat(v)) || 'Answer must be a number',
            ],
        }),
        methods: {
            submit: function (event) {
                console.log(this.answer);
                // if (this.$refs.form.validate()) {
                    // TODO: update store when "solved"

                // }
            },
        }


    }
</script>

<style lang="scss">

</style>