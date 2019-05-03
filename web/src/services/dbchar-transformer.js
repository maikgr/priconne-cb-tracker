export function transform (data) {
  return data.map(char => {
    return {
      id: char._id,
      name: char.char.alias,
      level: 1,
      rank: 1,
      stars: char.char.rarity,
      unique: char.unique !== '' ? 0 : null,
      gears: 'None',
      image: {
        avatar: char.char.image,
        artwork: char.char.artwork
      }
    }
  })
}

/**
 * 
 * @param {Object[]} data 
 */
export function sort (data) {
  data.sort((a, b) => {
    if (a.tier < b.tier ) {
      return -1;
    }
    else if (a.tier > b.tier) {
      return 1;
    }
    else {
      if (a._id < b._id) {
        return -1
      }
      else if (a._id > b._id) {
        return 1;
      }
      return 0;
    }
  })
  
  return data
}