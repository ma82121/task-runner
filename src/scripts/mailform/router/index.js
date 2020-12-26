import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/mailform/',
  routes: [
    {
      path: '/',
      component: resolve => {
        require.ensure(
          ['@/mailform/pages/Home'],
          () => {
            resolve(require('@/mailform/pages/Home'))
          },
          'Home'
        )
      }
    },
    {
      path: '/about',
      component: resolve => {
        require.ensure(
          ['@/mailform/pages/About'],
          () => {
            resolve(require('@/mailform/pages/About'))
          },
          'About'
        )
      }
    },
    {
      path: '/contact',
      component: resolve => {
        require.ensure(
          ['@/mailform/pages/Contact'],
          () => {
            resolve(require('@/mailform/pages/Contact'))
          },
          'Contact'
        )
      }
    },
    {
      path: '/test',
      component: resolve => {
        require.ensure(
          ['@/mailform/pages/Test'],
          () => {
            resolve(require('@/mailform/pages/Test'))
          },
          'Test'
        )
      }
    }
  ]
})
