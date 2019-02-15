<template>
    <p>Location {{ data.location.name }}</p>
</template>

<script>
    export default {
        name: 'FillInTheBlankClue',
        props: {
            data: Object,
            title: String,
            instructions: String
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