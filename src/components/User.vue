<template>
  <div class="user">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="is-pointer"
            @click="openInNewTab(user.html_url)"
            :src="user.avatar_url"
            height="300px"
          >
            <v-layout
              column
              fill-height
            >
              <v-spacer></v-spacer>
              <v-card-title class="white--text text-center pl-5 pt-5">
                <div class="display-1">{{ user.name }}</div>
              </v-card-title>
            </v-layout>
          </v-card-media>

          <v-list two-line>
        
            <v-list-tile @click="openInNewTab(user.blog)">
              <v-list-tile-action>
                <v-icon color="indigo">mail</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ user.bio || user.company  }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ user.blog }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider inset></v-divider>

            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon color="indigo">location_on</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ user.location }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    openInNewTab(url) {
      window.open(url)
    }
  }
}
</script>

<style scoped>
  .is-pointer {
    cursor: pointer
  }
</style>