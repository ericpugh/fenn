<template>
        <v-container class="task">
                <v-layout class="question" row wrap>
                        <v-flex xs12>
                                <div v-if="task.question.text" class="question">{{ task.question.text }}</div>
                        </v-flex>
                        <v-divider></v-divider>
                        <v-flex xs12>
                                <v-checkbox v-model="checked"
                                            :label="checked ? task.on : task.off"
                                            @change="submit"
                                            color="success"
                                            value="checked"
                                            class="large" hide-details></v-checkbox>
                        </v-flex>
                </v-layout>
        </v-container>
</template>

<script>
    export default {
        name: 'OnOffTask',
        props: {
            task: Object,
            taskNumber: Number,
            parentId: String
        },
        data: () => ({
            checked: false,
        }),
        methods: {
            submit: function () {
                if (this.checked === 'checked') {
                    this.$emit('task:completed');
                }
            }
        },


    }
</script>

<style lang="scss">
    .large.v-input--checkbox {
        text-align: center;
        width: 100%;
        font-size: 3rem;
        font-weight: 500;
        height: 3rem;
        i {
            font-size: 3rem;
        }
        label {
            padding-left: 1.5rem;
            font-size: 3rem;
        }
        [class*="__ripple"] {
            left: -0.5rem;
        }
    }
</style>