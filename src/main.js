// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App'
import VueResource from 'vue-resource'
import VueResourceMock from 'vue-resource-mock'
import MockData from './mock'   // MockData syntax down below
 
Vue.use(VueResource)
 
if (devMode) { // don't use it on your production build
  Vue.use(VueResourceMock, MockData, /* { silent: true/false } */) // after use vue-resource
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
