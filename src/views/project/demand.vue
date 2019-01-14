<template>
    <div id="demand">
        demand
    </div>
</template>
<script>
    export default {
        name: 'project-demand',
        computed: {
            project() {
                return this.$store.state.projects.project;
            }
        }
    }
</script>
