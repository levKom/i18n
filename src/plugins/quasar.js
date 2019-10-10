import Vue from 'vue'

import '../styles/quasar.styl'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import { Quasar, QLayout } from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
  },
  directives: {},
  plugins: {},
  iconSet: iconSet,
})
