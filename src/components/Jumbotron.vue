<template>
    <header class="welcome">
        <!--TODO: Set the image source, if empty default app logo.-->
        <img :alt="title + ' Logo'" class="logo" src="../assets/logo.png">
        <h1 v-html="title"></h1>
        <div v-html="welcome"></div>
    </header>
</template>

<script>
    export default {
        name: 'Jumbotron',
        props: {
            logo: {
                type: String,
                // default: "../assets/logo.png"
            },
            title: String,
            welcome: String
        }
    }
</script>

<style lang="scss">
    .welcome {
        text-align: center;
        background: #EFEFEF;
        padding: 1rem;
        width: 100%;
    }
</style>