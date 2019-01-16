<template>
    <v-dialog
            v-model="loadingBar.show"
            persistent
            width="300"
    >
        <v-card
                :color="this.$store.state.primary_color"
                dark
        >
            <v-card-text class="text-xs-center">
                正在加载
                <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                ></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
    export default {
        name: 'loading-bar',
        computed: {
            loadingBar() {
                return this.$store.state.loadingBar
            }
        },
    }
</script>
