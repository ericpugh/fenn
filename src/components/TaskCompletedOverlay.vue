<template>
    <v-layout class="overlay" align-center justify-center row fill-height>
        <div class="message">
            <v-flex xs12>
                <v-icon size="200" color="white" flat>done</v-icon>
            </v-flex>
            <v-flex xs12>
                <div class="message white--text" v-html="message"></div>
            </v-flex>
        </div>
        <div class="bg"></div>
    </v-layout>
</template>

<script>
    export default {
        name: 'TaskCompletedOverlay',
        props: {
            message: String
        },
    }
</script>

<style lang="scss">
    .overlay {
        width: 100%;
        height: 100%;
        z-index: 2;
        text-align: center;
        vertical-align: middle;
        position: absolute;

        .message {
            text-align: center;
            font-size: 2.5rem;
            z-index: 3;
        }
        .bg {
            z-index: 2;
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0.5;
            background-color: #3357a3; //TODO: Get color from theme config.
        }
    }
</style>