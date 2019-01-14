import Vue from 'vue'
import Vuex from 'vuex'

import auth from './store/auth.js';
import projects from './store/projects.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    primary_color: 'teal'
  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth,
    projects,
  },
})
