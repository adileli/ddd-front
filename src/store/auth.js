import authApi from '../api/auth.js';

export default {
    namespaced: true,
    state: {
        user: {},
        user_is_login: false,
    },
    getters: {
        getUserLoginStatus(state) {
            return function () {
                return state.user_is_login;
            }
        },
        getUser(state) {
            return state.user;
        }
    },
    actions: {
        login({commit, dispatch}, user) {
            return authApi.postLogin(user.email, user.password)
                .then(response => {
                    if (response.data) {
                        dispatch('loginUser', response.data);
                    }
                    return true;
                })
                .catch(err => {
                    return err.response.data;
                });
        },
        logout({dispatch}){
            return authApi.postLogout()
                .then(response => {
                    dispatch('logoutUser');
                })
        },
        loadUser({dispatch}) {
            return authApi.getUser()
                .then(response => {
                    if (response.data) {
                        dispatch('loginUser', response.data);
                    }
                })
                .catch(response => {
                    dispatch('logoutUser');
                })
        },
        loginUser({commit}, user) {
            commit('setUser', user);
            commit('setToken', user.api_token);
            commit('setUserIsLogin', true);
        },
        logoutUser({commit}) {
            commit('setUser', {});
            commit('setToken', '');
            commit('setUserIsLogin', false);
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            localStorage.setItem('token', token);
        },
        setUserIsLogin(state, status) {
            state.user_is_login = status;
        },
    }
}
