import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router);

function requireAuth(to, from, next) {
  if (!store.state.auth.user_is_login) {
    store.dispatch('auth/loadUser').then(function (res) {
        if (res) {
          next();
        } else {
          next('/login');
        }
    });
  } else {
    next();
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/projects/projects.vue')
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
      component: () => import('./views/projects/projects.vue')
    },
    {
        path: '/project/:id',
        name: 'project',
        component: () => import('./views/project/project.vue'),
        beforeEnter: requireAuth,
        children: [
            {
              path: 'dashboard',
              name: 'dashboard',
              components: {'project-view': () => import('./views/project/dashboard.vue')},
            },
            {
              path: 'demand/:iteration',
              name: 'demand',
              components: {'project-view': () => import('./views/project/demand.vue')},
            },
          {
            path: 'develop/:iteration',
            name: 'develop',
            components: {'project-view': () => import('./views/project/develop.vue')},
          },
          {
            path: 'debug/:iteration',
            name: 'debug',
            components: {'project-view': () => import('./views/project/debug.vue')},
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
