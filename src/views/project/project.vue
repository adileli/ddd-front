<template>
    <div id="dashboard">
        <project-sidebar></project-sidebar>
        <project-toolbar :project="project"></project-toolbar>
        <v-content :class="this.project.primary_color" class="lighten-5" style="min-height: 100vh;">
            <v-container fluid>
                <router-view name="project-view"></router-view>
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
            }
        }
    }
</script>
