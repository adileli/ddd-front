<template>
    <div id="debug">
        debug
    </div>
</template>
<script>
    export default {
        name: 'project-debug',
        computed: {
            project() {
                return this.$store.state.projects.project;
            }
        }
    }
</script>
