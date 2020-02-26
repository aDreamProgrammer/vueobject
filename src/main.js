// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'
import VueResource from 'vue-resource';
Vue.filter('dataFormat', function (datastr) {
  var date = new Date(datastr)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
})
Vue.use(Mint)
Vue.config.productionTip = false
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c=>c(App)
})
