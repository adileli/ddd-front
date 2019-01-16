<template>
    <div id="projects-list">
        <v-flex v-for="project in projects" :key="project.id">
            <v-card :class="project.primary_color" :to="{name: 'dashboard', params:{id:project.id}}">
                <v-card-title>
                    <span class="title font-weight-light white--text">{{project.name}}</span>
                    <v-spacer></v-spacer>
                    <v-btn @click.stop.prevent="openDeleteProjectDialog(project)" small icon dark style="opacity: .6">
                        <v-icon>close</v-icon>
                    </v-btn>
                </v-card-title>
            </v-card>
        </v-flex>
        <v-flex v-if="projects.length === 0">
            <p class="text-xs-center">暂无项目</p>
        </v-flex>

        <v-dialog v-model="dialog" persistent max-width="450px" dark>
            <v-card color="red">
                <v-card-title>
                    <span class="headline">确认删除项目</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field v-model="confifm_project_name" label="项目名称" required></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat @click="dialog = false">取消</v-btn>
                    <v-btn flat @click="deleteProject(project_id)" :disabled="deleteBtnDisabled">确定</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
    export default {
        name: 'projects-list',
        data() {
            return {
                dialog: false,
                confifm_project_name: '',
                project_name: '',
                project_id: 0,
            }
        },
        props:{
            projects: {
                type: Array
            }
        },
        computed: {
            deleteBtnDisabled() {
                return this.confifm_project_name !== this.project_name;
            }
        },
        methods: {
            deleteProject(id) {
                this.$store.dispatch('projects/deleteProject', id);
                this.project_name = '';
                this.project_id = '';
                this.dialog = false;
            },
            openDeleteProjectDialog(project) {
                this.project_name = project.name;
                this.project_id = project.id;
                this.dialog = true;
            }
        }
    }
</script>
