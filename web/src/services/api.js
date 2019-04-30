import axios from 'axios'

const baseUrl = 'http://localhost:8081'
export default {
  get: function() {
    return axios.get(`${baseUrl}/char`)
  }
}