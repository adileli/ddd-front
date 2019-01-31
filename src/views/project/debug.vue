<template>
    <div id="debug">
        debug
    </div>
</template>
<script>
    import projectHelper from './widget/helper.js';

    export default {
        mixins: [projectHelper],
        name: 'project-debug',
        computed: {
            project() {
                return this.$store.state.projects.project;
            }
        }
    }
</script>
