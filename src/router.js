import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/projects.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue'),
      beforeEnter: (to, from, next) => {
        store.watch(store.getters['auth/getUserLoginStatus'], function () {
          if (store.state.auth.user_is_login) {
            next('/')
          }
        });
        next()
      },
    },
    {
      path: '/projects',
      name: 'projects-list',
      component: () => import('./views/projects.vue')
    },
    {
        path: '/project/:id',
        name: 'project',
        component: () => import('./views/project/project.vue'),
        meta: {requireAuth: true},
        children: [
            {
              path: 'dashboard',
              name: 'dashboard',
              components: {'project-view': () => import('./views/project/dashboard.vue')},
              meta: {requireAuth: true},
            },
            {
              path: 'demand',
              name: 'demand',
              components: {'project-view': () => import('./views/project/demand.vue')},
              meta: {requireAuth: true},
            },
          ]
    },
    {
      path: '/*',
      name: 'not-found',
      component: () => import('./views/404.vue')
    },
  ]
})
