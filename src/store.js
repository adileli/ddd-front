import Vue from 'vue'
import Vuex from 'vuex'

import auth from './store/auth.js';
import projects from './store/projects.js';

Vue.use(Vuex);

export default new Vuex.Store({
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
    }
  },
  mutations: {
    setSnackbar (state, snackbar) {
      state.snackbar = snackbar;
    },
    setLoadingBar(state, loadingBar) {
      state.loadingBar = loadingBar;
    }
  },
  actions: {
    showSnackbar({state,commit}, snackbar) {
      snackbar = Object.assign(state.snackbar, snackbar);
      commit('setSnackbar', snackbar);
    },
    toggleLoadingBar({state, commit}) {
      commit('setLoadingBar', {show: !state.loadingBar.show})
    }
  },
  modules: {
    auth,
    projects,
  },
})
