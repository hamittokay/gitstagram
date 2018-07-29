import Vue from 'vue'
import axios from 'axios'
import config from '@/config'

Vue.prototype.$http = axios.create({
  baseURL: config.BASE_URL
})
