import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/quasar'
import ModulesLoader from '@utils/modules-loader'
import i18n from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(FlagIcon)
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')

const modulesLoader = new ModulesLoader(router, store)
modulesLoader.load()
