<template>
    <v-snackbar
            v-model="snackbar.show"
            :timeout="snackbar.timeout"
            :color="snackbar.color"
            :top="snackbar.y === 'top'"
            :bottom="snackbar.y === 'bottom'"
            :left="snackbar.x === 'left'"
            :right="snackbar.x === 'right'"
            :multi-line="snackbar.mode === 'multi-line'"
            :vertical="snackbar.mode === 'vertical'"
    >
        {{ snackbar.text }}
        <v-btn
                dark
                flat
                @click="snackbar.show = false"
        >
            关闭
        </v-btn>
    </v-snackbar>
</template>
<script>
    export default {
        name: 'snackbar',
        computed: {
            snackbar() {
                return this.$store.state.snackbar
            }
        },
    }
</script>
