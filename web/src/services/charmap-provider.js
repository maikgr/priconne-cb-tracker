import api from './api'
import { imageMap, artworkMap } from "./dbchar-transformer"

export function getImageMap() {
  return api.get()
    .then((result) => {
      return imageMap(result.data)
    })
    .catch(e => {
      throw e
    })
}

export function getArtworkMap() {
  return api.get()
    .then((result) => {
      return artworkMap(result.data)
    })
    .catch(e => {
      throw e
    })
}