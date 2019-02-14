<template>
    <Hunt/>
</template>

<script>
    import Hunt from '@/components/Hunt.vue'
    export default {
        name: 'hunt',
        components: {
            Hunt
        },
        computed: {
            hunt() {
                return this.$store.state.hunt.hunt
            }
        }
    }
</script>

<style lang="scss">

</style>