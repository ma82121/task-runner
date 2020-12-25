import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: resolve => {
        require.ensure(
          ['@/main/pages/Home'],
          () => {
            resolve(require('@/main/pages/Home'))
          },
          'Home'
        )
      }
    },
    {
      path: '/about',
      component: resolve => {
        require.ensure(
          ['@/main/pages/About'],
          () => {
            resolve(require('@/main/pages/About'))
          },
          'About'
        )
      }
    },
    {
      path: '/contact',
      component: resolve => {
        require.ensure(
          ['@/main/pages/Contact'],
          () => {
            resolve(require('@/main/pages/Contact'))
          },
          'Contact'
        )
      }
    },
    {
      path: '/test',
      component: resolve => {
        require.ensure(
          ['@/main/pages/Test'],
          () => {
            resolve(require('@/main/pages/Test'))
          },
          'Test'
        )
      }
    }
  ]
})
