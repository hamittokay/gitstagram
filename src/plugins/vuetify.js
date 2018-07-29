import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VAlert,
  VFooter,
  VList,
  VBtn,
  VTextField,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VProgressLinear,
  VCard,
  VDivider,
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAlert,
    VFooter,
    VList,
    VBtn,
    VTextField,
    VIcon,
    VGrid,
    VToolbar,
    VProgressLinear,
    VCard,
    VDivider,
    transitions
  },
})
