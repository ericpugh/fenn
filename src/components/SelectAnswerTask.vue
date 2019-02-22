<template>
    <v-container class="task">
        <v-layout class="question" row wrap>
            <v-flex xs12>
                <div v-if="task.question.text" class="question">{{ task.question.text }}</div>
            </v-flex>
            <v-divider></v-divider>
            <v-flex xs12 d-flex>
                <v-select
                        :items="task.solution.choices"
                        :label="task.solution.selectLabel ? task.solution.selectLabel : 'Answer'"
                        :disabled="answered"
                        v-on:change="submit"
                        outline></v-select>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'SelectAnswerTask',
        props: {
            task: Object,
            taskNumber: Number,
            parentId: String
        },
        data: () => ({
            answered: false,
        }),
        methods: {
            submit: function (value) {
                if ( value === this.task.solution.answer || this.task.solution.requirement === "ambiguous") {
                    this.answered = true;
                    this.$emit('task:completed');
                }
                else {
                    this.$emit('task:incorrect');
                }
            }
        },


    }
</script>

<style lang="scss">
</style>