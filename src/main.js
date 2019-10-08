import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/quasar'
window.appModules = {}
Vue.config.productionTip = false

// const modulesMap = [
//   {
//     name: 'testModule',
//     url: 'http://localhost:1111/test.js',
//   },
// ]

// function externalComponent(url) {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement('script')
//     script.async = true
//     script.addEventListener('load', resolve)
//     script.addEventListener('error', () => {
//       reject(new Error(`Error loading ${url}`))
//     })
//     script.src = url
//     document.head.appendChild(script)
//   })
// }

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// const promises = modulesMap.map((moduleItem) => { externalComponent(moduleItem.url)})

// externalComponent('http://localhost:1111/test.js').then(() => {
//   window.appModules.testModule.init({ store, router })
// })
