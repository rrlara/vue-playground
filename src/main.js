import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import MapView from './components/MapView.vue'
import ListView from './components/ListView.vue'
import ModalView from './components/ModalView.vue'
import LoginView from './components/LoginView.vue'


// install router
Vue.use(Router)


// routing
var router = new Router()

router.map({
  '/login': {
    component: LoginView
  },
  '/map': {
    component: MapView
  },
  '/list': {
    component: ListView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/login'
})

router.start(App, '#app')
