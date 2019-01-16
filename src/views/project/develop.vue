<template>
    <div id="develop">
        develop
    </div>
</template>
<script>
    export default {
        name: 'project-develop',
        computed: {
            project() {
                return this.$store.state.projects.project;
            }
        }
    }
</script>
