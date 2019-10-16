import Vue from 'vue'
import Vuex from 'vuex'
import jsonData from '@store/modules/jsonData'
import i18n from '../plugins/i18n.js'

window.Vuex = Vuex

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLocale: localStorage.getItem('locale'),
  },

  mutations: {
    updateLocale(state, newLocale) {
      state.currentLocale = newLocale
      i18n.locale = newLocale
      localStorage.setItem('locale', String(newLocale))
    },
  },

  actions: {},

  modules: {
    jsonData,
  },
})
