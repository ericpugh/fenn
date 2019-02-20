<template>
        <v-checkbox v-model="checked" :label="checked ? task.on : task.off" color="accent" value="checked" class="large" hide-details></v-checkbox>
</template>

<script>
    export default {
        name: 'OnOffTask',
        props: {
            task: Object
        },
        data () {
            return {
                checked: false,
            }
        }
        // TODO: update store when "solved"

    }
</script>

<style lang="scss">
    .large.v-input--checkbox {
        font-size: 4rem;
        font-weight: 500;
        height: 4rem;
        i {
            font-size: 4rem;
        }
        label {
            padding-left: 2rem;
            font-size: 4rem;
        }
        [class*="__ripple"] {
            left: 0.5rem;
        }
    }
</style>