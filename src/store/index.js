import Vue from 'vue'
import Vuex from 'vuex'
import jsonData from '@store/modules/jsonData'
import i18n from '../plugins/i18n.js'

window.Vuex = Vuex

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLocale: '',
  },

  mutations: {
    updateLocale(state, newLocale) {
      state.currentLocale = newLocale;
    },
  },

  actions: {
    setLocale(context, newLocale) {
      let locale = '';

      if (newLocale !== null) {
        locale = newLocale
        i18n.locale = newLocale
        localStorage.setItem('locale', String(newLocale))
      } else {
        locale = i18n.fallbackLocale;
        i18n.locale = i18n.fallbackLocale;
      };

      context.commit('updateLocale', locale);
    }
  },

  modules: {
    jsonData,
  },
})
