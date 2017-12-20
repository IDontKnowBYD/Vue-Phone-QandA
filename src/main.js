// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './style/common'
import './config/rem'

Vue.config.productionTip = false

var OfflinePlugin = require('offline-plugin/runtime')

OfflinePlugin.install({
  onUpdateReady () {
    OfflinePlugin.applyUpdate()
  },
  onUpdated () {
    console.log('updated')
    window.location.reload()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
