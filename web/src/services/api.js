import axios from 'axios'

const baseUrl = 'http://localhost:8081'
export default {
  get: function() {
    return axios.get(`${baseUrl}/char`)
  },
  addUser: function(username, level, owned, notOwned) {
    return axios.post(`${baseUrl}/user`, { username, level, owned, notOwned })
  },
  getUser: function(id) {
    return axios.get(`${baseUrl}/user/${id}`)
  }
}