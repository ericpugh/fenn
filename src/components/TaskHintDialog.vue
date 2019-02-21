<template>
    <v-dialog v-model="visible" width="75%" light>
        <v-btn slot="activator" icon>
            <v-icon small>help_outline</v-icon>
        </v-btn>
        <v-card>
            <v-card-title class="headline" primary-title>
                <v-btn icon @click="visible = false">
                    <v-icon>close</v-icon>
                </v-btn>
                Hint
            </v-card-title>
            <VCardText v-html="message"></VCardText>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'TaskHintDialog',
        props: {
            message: {
                type: String,
                required: true,
            }
        },
        data: () => ({
            visible: false,
        })
    }
</script>

<style lang="scss">

</style>