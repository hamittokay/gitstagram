<template>
  <v-app>
    <v-toolbar
      app
      dark
      color="black"
      :clipped-left="clipped"
    >
    <v-toolbar-title>Githubstagram</v-toolbar-title>
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
      <span>&copy; 2017</span>
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
