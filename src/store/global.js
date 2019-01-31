export default {
    namespaced: false,
    state: {
        primary_color: 'primary',
        snackbar: {
            show: false,
            y: 'top',
            x: 'right',
            mode: '',
            timeout: 3000,
            color: 'red',
            text: 'test',
        },
        loadingBar: {
            show: false,
        },
        drawer: true,
        loading: false,
    },
    mutations: {
        setSnackbar (state, snackbar) {
            state.snackbar = snackbar;
        },
        setLoadingBar(state, loadingBar) {
            state.loadingBar = loadingBar;
        },
        setDrawer(state, status) {
            state.drawer = status;
        },
        setLoading(state, status) {
            state.loading = status;
        }
    },
    actions: {
        showSnackbar({state,commit}, snackbar) {
            snackbar = Object.assign(state.snackbar, snackbar);
            commit('setSnackbar', snackbar);
        },
        showLoadingBar({commit}) {
            commit('setLoadingBar', {show: true});
        },
        hideLoadingBar({commit}) {
            commit('setLoadingBar', {show: false});
        }
    },
    getters: {
        primary_color(state) {
            return state.primary_color;
        },
        loading(state) {
            return state.loading;
        },
        loadingBar(state) {
            return state.loadingBar;
        },
        drawer(state) {
            return state.drawer;
        },
        snackbar(state) {
            return state.snackbar
        }
    }
}
