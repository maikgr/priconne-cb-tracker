import axios from 'axios'

const baseUrl = 'http://localhost:8081'
export default {
  get: function() {
    return axios.get(`${baseUrl}/char`)
  },
  chars: function() {
    return axios.get(`${baseUrl}/char`)
      .then((result) => {
        return transform(result.data)
      })
  },
  addUser: function(username, level, owned, notOwned) {
    return axios.post(`${baseUrl}/user`, { username, level, owned, notOwned })
  },
  getUser: function(id) {
    return axios.get(`${baseUrl}/user/${id}`)
  }
}

function transform (data) {
  return data.map(char => {
    return {
      id: char._id,
      name: char.char.alias,
      level: 1,
      rank: 1,
      stars: char.char.rarity,
      unique: char.unique !== '' ? 0 : null,
      gears: 'None',
      tier: char.tier
    }
  })
}
