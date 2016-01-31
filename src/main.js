import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import MapView from './components/MapView.vue'
import ListView from './components/ListView.vue'
import ModalView from './components/ModalView.vue'
import LoginView from './components/LoginView.vue'
import ListMapView from './components/ListMapView.vue'
import lazyload from 'vue-lazyload'



// install router
Vue.use(Router)

Vue.use(lazyload, {
  error: './img/error.png',
  loading: './img/loading-spin.svg'
})



// routing
var router = new Router()

router.map({
  '/login': {
    component: LoginView
  },
  '/listmap': {
    component: ListMapView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/login'
})

router.start(App, '#app')
