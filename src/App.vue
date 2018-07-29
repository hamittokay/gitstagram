<template>
  <v-app>
    <v-toolbar
      app
      dark
      color="black"
      :clipped-left="clipped"
    >
    <v-toolbar-title>Gitstagram</v-toolbar-title>
    </v-toolbar>
    <v-content class="mt-5">
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12 lg8>
            <search />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <v-layout justify-center row>
        <span>Made with <v-icon small color="pink">favorite</v-icon> by <a href="http://hamit.work" target="_blank">@hamittokay</a></span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Search from '@/components/Search'

export default {
  name: 'App',
  components: {
    Search
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
