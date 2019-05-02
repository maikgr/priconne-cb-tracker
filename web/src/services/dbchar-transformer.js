export function transform (result) {
  return result.data.map(char => {
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