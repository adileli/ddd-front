<template>
    <div id="dashboard">
        dashboard
        {{project.name}}
    </div>
</template>

<script>
    export default {
        name: 'project-dashboard',
        computed: {
            project() {
                return this.$store.state.projects.project;
            }
        }
    }
</script>
