const database = require('./database')

/**
 * Add new character to database
 * @param {Object[]} chars the list of character to add
 * @param {Object} chars[].char the character data
 * @param {String} chars[].char.image the character image url
 * @param {String} chars[].char.name the character original name
 * @param {String} chars[].char.alias the character English alias
 * @param {Number} chars[].char.rarity the character initial rarity rank
 * @param {String} chars[].type the type of the character
 * @param {Object} chars[].skills the skill data of the character
 * @param {String} chars[].skills.union the Union Burst of the character
 * @param {String} chars[].skills.skill1 the Skill 1 of the character
 * @param {String} chars[].skills.skill2 the Skill 2 of the character
 * @param {String} chars[].skills.ex the Ex Skill of the character
 * @param {String} chars[].unique the unique weapon of the character
 */

module.exports.update = async function (chars) {
  const dbChars = await database.get()
  const dbCharNames = dbChars.map(c => c.char.name)
  let newChars = chars;
  
  if (dbCharNames.length > 0) {
    newChars = chars.filter(c => c.char.name && !dbCharNames.includes(c.char.name))
  }

  if (newChars.length > 0) {
    newChars.forEach(async (char) => {
      const saved = await database.add(char)
      console.log('Added ' + saved.char.name)
    })
  }
  else {
    console.log(`There's no update`)
  }
}