<template>
    <div id="projects-list">
        <v-flex v-for="project in projects" :key="project.id">
            <v-card :class="project.primary_color" :to="{name: 'dashboard', params:{id:project.id}}">
                <v-card-title>
                    <span class="title font-weight-light white--text">{{project.name}}</span>
                    <v-spacer></v-spacer>
                    <v-btn @click.stop.prevent="deleteProject(project.id)" icon>
                        <v-icon >close</v-icon>
                    </v-btn>
                </v-card-title>
            </v-card>
        </v-flex>
        <v-flex v-if="projects.length === 0">
            暂无项目
        </v-flex>
    </div>
</template>
<script>
    export default {
        name: 'projects-list',
        props:{
            projects: {
                type: Array
            }
        },
        methods: {
            deleteProject(id) {
                this.$store.dispatch('projects/deleteProject', id);
            }
        }
    }
</script>
