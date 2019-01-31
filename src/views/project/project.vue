<style>
    .slide-left-enter-active, .slide-left-leave-active {
        transition: all .35s cubic-bezier(.55,0,.1,1);
    }
    .slide-left-enter, .slide-left-leave-active {
        transform: translate(-80vw);
    }
</style>
<template>
    <div id="dashboard">
        <project-sidebar></project-sidebar>
        <project-toolbar :project="project" :loading="loading"></project-toolbar>
        <v-content :class="this.project.primary_color" class="lighten-5" style="min-height: 100vh;">
            <v-container fluid grid-list-md>
                <transition name="slide-left" mode="out-in">
                    <router-view name="project-view"></router-view>
                </transition>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    import ProjectSidebar from "./widget/sidebar";
    import ProjectToolbar from "./widget/toolbar";
    export default {
        name: 'project-dashboard',
        components: {ProjectToolbar, ProjectSidebar},
        beforeRouteEnter(to, from, next) {
          next(vm => {
              let project = vm.$store.dispatch('projects/getProjectById', to.params.id);
              project.then(project => {
                  document.title = project.name;
              });
          });
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
            },
            loading() {
                return this.$store.getters['loading'];
            }
        }
    }
</script>
