<template>
    <div id="project-toolbar">
        <v-toolbar :color="project.primary_color" class="darken-2" app dark>
            <v-btn icon class="hidden-lg-and-up" @click.stop="drawer = !drawer">
                <v-icon>more_vert</v-icon>
            </v-btn>
            <v-toolbar-title class="white--text">{{project.name}}</v-toolbar-title>
            <v-progress-circular indeterminate size="20" width="2" v-show="loading"></v-progress-circular>
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
            },
            loading: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            drawer: {
                get() {
                    return this.$store.getters['drawer'];
                },
                set(status) {
                    this.$store.commit('setDrawer', status);
                }
            }
        }
    }
</script>
