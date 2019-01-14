import {GLOBAL_CONFIG} from '../config.js';

export default {
    getUser () {
        return axios.get(GLOBAL_CONFIG.API_URL + '/user');
    },
    postLogin: function (email, password) {
        let formData = new FormData();

        formData.append('email', email);
        formData.append('password', password);

        return axios.post(GLOBAL_CONFIG.API_URL + '/login',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );
    },
    postLogout: function () {
        return axios.post(GLOBAL_CONFIG.API_URL + '/logout');
    }
}
