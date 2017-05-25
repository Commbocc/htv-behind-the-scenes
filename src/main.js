// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import { store } from './store'

// lightbox2
import '../node_modules/lightbox2/dist/js/lightbox-plus-jquery.min.js'
import '../node_modules/lightbox2/dist/css/lightbox.min.css'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
