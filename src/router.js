import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import ObjectScreen from './components/ObjectScreen'
import ZoomScreen from './components/ZoomScreen'
import TranslateScreen from './components/TranslateScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/object/:obj_id',
      name: 'object',
      component: ObjectScreen,
      children: [
        {
          path: 'zoom',
          component: ZoomScreen
        },
        {
          path: 'translation',
          component: TranslateScreen
        }
      ]
    }
  ]
})
