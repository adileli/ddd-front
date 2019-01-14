import projectsApi from '../api/projects.js';

export default {
    namespaced: true,
    state: {
        all: [],
        project: {}
    },
    getters: {},
    actions: {
        getAllProjects ({ commit }) {
            return projectsApi.getProjects()
                .then(function (response) {
                    commit('setProjects', response.data);
                })
                .catch(function () {
                    commit('setProjects', []);
                });
        },
        getProjectById({ commit }, id) {
            return projectsApi.getProject(id)
                .then(function (response) {
                    commit('setProject', response.data);
                })
                .catch(function () {
                    commit('setProject', {});
                });
        },
        createProject({ dispatch, commit }, project) {
            return new Promise((resolve, reject) => {
                projectsApi.postCreateProject(project)
                    .then(function (response) {
                        commit('setProject', response.data);
                        dispatch('getAllProjects');
                        resolve(response.data);
                    })
                    .catch(function (response) {
                        commit('setProject', {});
                        reject(response);
                    })
            })
        },
        updateProject({commit}, id, project) {
            return projectsApi.putEditProject(id, project)
                .then(function (response) {
                    commit('setProject', response)
                })
                .catch(function () {
                    commit('setProject', {});
                })
        },
        deleteProject({commit}, id) {
            return projectsApi.postDeleteProject(id)
                .then(function (response) {
                    commit('setProject', {});
                    commit('setProjects', []);
                })
                .catch(function () {
                    commit('setProject', {});
                    commit('setProjects', []);
                })
        }
    },
    mutations: {
        setProjects (state, projects) {
            state.all = projects
        },
        setProject(state, project) {
            state.project = project
        }
    }
}
