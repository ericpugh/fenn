<template>
    <v-container class="task">
        <v-layout row wrap>
            <v-flex xs12>
                <v-checkbox v-model="checked" :label="checked ? data.on : data.off" color="success" value="checked" hide-details></v-checkbox>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'OnOffTask',
        props: {
            data: Object,
            title: String,
            instructions: String
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

</style>