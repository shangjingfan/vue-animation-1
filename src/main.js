// import Vue from 'vue'
import App from './App.vue'

const Vue = window.Vue //index.html引用了完整版vue.js


// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
