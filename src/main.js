import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/quasar'
import ModulesLoader from '@utils/modules-loader'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

const modulesLoader = new ModulesLoader(router, store)
modulesLoader.load()
