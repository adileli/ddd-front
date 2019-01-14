import {GLOBAL_CONFIG} from '../config.js';

export default {
    getProjects () {
        return axios.get(GLOBAL_CONFIG.API_URL + '/projects');
    },
    getProject(id) {
        return axios.get(GLOBAL_CONFIG.API_URL + '/projects/' + id);
    },
    postCreateProject: function (project) {
        let formData = new FormData();

        formData.append('name', project.name);
        formData.append('summary', project.summary);
        formData.append('creator', project.creator);
        formData.append('primary_color', project.primary_color);
        formData.append('visible', project.visible);

        return axios.post(GLOBAL_CONFIG.API_URL + '/projects',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
    },
    putEditProject: function (id, project) {
        let formData = new FormData();

        formData.append('name', project.name);
        formData.append('summary', project.summary);
        formData.append('creator', project.creator);
        formData.append('primary_color', project.primary_color);

        formData.append('_method', 'PUT');

        return axios.post(GLOBAL_CONFIG.API_URL + '/projects/' + id,
            formData
        );
    },

    postDeleteProject: function (id) {
        return axios.delete(GLOBAL_CONFIG.API_URL + '/projects/' + id);
    }
}
