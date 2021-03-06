import Vue from 'vue'

import '../styles/quasar.scss'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
  Quasar,
  QLayout,
  QBtn,
  QMarkupTable,
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QBtn,
    QMarkupTable,
  },
  directives: {},
  plugins: {},
  iconSet: iconSet,
})
