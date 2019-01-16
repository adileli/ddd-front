<template>
    <div id="dashboard">
        <v-navigation-drawer fixed app v-model="drawer">
            <v-list dense>
                <v-list-tile :to="{name: 'dashboard'}">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>详情</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile :to="{name: 'demand'}">
                    <v-list-tile-action>
                        <v-icon>assignment</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>需求</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile :to="{name: 'develop'}">
                    <v-list-tile-action>
                        <v-icon>list_alt</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>任务</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile :to="{name: 'debug'}">
                    <v-list-tile-action>
                        <v-icon>bug_report</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Bug</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
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
        <v-content :class="this.project.primary_color" class="lighten-5" style="min-height: 100vh;">
            <v-container fluid>
                <router-view name="project-view"></router-view>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    export default {
        name: 'project-dashboard',
        created() {
            this.$store.dispatch('projects/getProjectById', this.$route.params.id)
        },
        data() {
            return {
                drawer: true,
            }
        },
        computed: {
            user() {
                return this.$store.state.auth.user;
            },
            userIsLogin() {
                return this.$store.state.auth.user_is_login;
            },
            project() {
                return this.$store.state.projects.project;
            }
        }
    }
</script>
