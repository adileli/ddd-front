<template>
    <div id="projects-list">
        <v-toolbar :color="this.$store.state.primary_color" app extended dark tabs>
            <v-toolbar-title>EduSoho 项目管理器</v-toolbar-title>
            <v-spacer></v-spacer>
            <div v-if="userIsLogin">
                <v-menu transition="slide-y-transition" offset-y>
                    <v-btn slot="activator" color="primary">hi, {{user.name}}</v-btn>
                    <v-list>
                        <v-list-tile>个人设置</v-list-tile>
                        <v-divider></v-divider>
                        <v-list-tile @click="logout" color="red">
                            <v-list-tile-title>退出登陆</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </div>
            <v-btn @click="gotoLogin" v-else light>登陆</v-btn>

            <v-tabs slot="extension" v-model="tabs" centered color="transparent">
                <v-tab href="#projects"><v-icon>list</v-icon>项目列表</v-tab>
                <v-tab href="#members"><v-icon>people</v-icon>人员列表</v-tab>
                <v-tab href="#create-project"><v-icon>add</v-icon>创建项目</v-tab>
                <v-tabs-slider color="white"></v-tabs-slider>
            </v-tabs>
        </v-toolbar>
        <v-content>
            <v-container fill-height grid-list-xl>
                <v-layout column>
                    <v-tabs-items v-model="tabs">
                        <v-tab-item v-for="content in ['projects', 'members', 'create-project']" :key="content" :value="content">
                            <div v-if="content === 'projects'">
                                <projects-list :projects="projects"></projects-list>
                            </div>
                            <div v-else-if="content === 'members'">
                                <members-list></members-list>
                            </div>
                            <div v-else-if="content === 'create-project'">
                                <project-create></project-create>
                            </div>
                        </v-tab-item>
                    </v-tabs-items>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    import MembersList from "./projects/members";
    import ProjectsList from "./projects/list";
    import ProjectCreate from "./projects/create";
    export default {
        name: 'projects',
        components: {ProjectCreate, ProjectsList, MembersList},
        created() {
            this.$store.dispatch('projects/getAllProjects');
        },
        data() {
          return {
              tabs: null
          }
        },
        computed: {
            projects() {
                return this.$store.state.projects.all;
            },
            user() {
                return this.$store.state.auth.user;
            },
            userIsLogin() {
                return this.$store.state.auth.user_is_login;
            }
        },
        methods: {
            gotoLogin() {
                this.$router.push({name: 'login'});
            },
            logout() {
                this.$store.dispatch('auth/logout');
            }
        }
    }
</script>

