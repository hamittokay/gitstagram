<template>
  <div class="search">
    <v-text-field
      v-model="search"
      append-icon="arrow_forward"
      flat
      label="Search By Github Username"
      prepend-inner-icon="search"
      solo-inverted
      @keyup.enter="fetchUsers" />
      <v-progress-linear
        v-if="loading"
        :indeterminate="true"
        class="mt-0"
        :size="1" />
      <v-alert
        :value="message.status"
        v-if="!user && !loading"
        :type="message.type"
      >
        {{ message.text }}
      </v-alert>
      <user
        v-if="user && !loading"
        :user="user" />
  </div>
</template>

<script>
import User from '@/components/User'

export default {
  name: 'Search',
  data: () => ({
    loading: false,
    user: null,
    search: '',
    message: {
      text: '',
      type: null,
      status: false
    }
  }),
  components: {
    User,
  },
  methods: {
    fetchUsers() {
      if (this.search == '') {
        this.message = {
          text: `Please fill the field`,
          type: 'warning',
          status: true
        }
        return
      }

      this.loading = true
      this.$http.get(`users/${this.search}`)
        .then(res => {
          if (res.status === 200) {
            this.user = res.data
          }
        })
        .catch(err => {
          this.user = null
          this.message = {
              text: `There is no user found with the username : ${this.search}`,
              type: 'error',
              status: true
          }
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
