<template>
    <div id="project-toolbar">
        <v-toolbar :color="project.primary_color" class="darken-2" app dark>
            <v-btn icon class="hidden-lg-and-up" @click.stop="drawer = !drawer">
                <v-icon>more_vert</v-icon>
            </v-btn>
            <v-toolbar-title class="white--text">{{project.name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn :to="{name: 'projects-list'}" outline>
                返回
            </v-btn>
        </v-toolbar>
    </div>
</template>
<script>
    export default {
        name: 'project-toolbar',
        props: {
            project: {
                type: Object,
                required: true
            }
        },
        computed: {
            drawer: {
                get() {
                    return this.$store.state.drawer;
                },
                set(status) {
                    this.$store.commit('setDrawer', status);
                }
            }
        }
    }
</script>
