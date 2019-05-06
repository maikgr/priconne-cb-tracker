import api from './api'

export function getImageMap() {
  return api.get()
    .then((result) => {
      return imageMap(result.data)
    })
}

export function getArtworkMap() {
  return api.get()
    .then((result) => {
      return artworkMap(result.data)
    })
}

function imageMap (data) {
  let map = {};
  data.forEach(function(char) {
    map[char._id] = char.char.image
  })

  return map
}

function artworkMap (data) {
  let map = {};
  data.forEach(function(char) {
    map[char._id] = char.char.artwork
  })

  return map
}
