const mongoose = require('mongoose')
const connection = mongoose.connection
const Schema = mongoose.Schema

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
connection.on('connected', () => console.log('connected to db'))
connection.on('disconnected', () => console.log('disconnected from db'))

const CharSchema = new Schema ({
    char: {
      image: String,
      name: String,
      alias: String,
      rarity: Number
    },
    type: String,
    skills: {
      union: String,
      skill1: String,
      skill2: String,
      ex: String
    },
    unique: String
})

const Char = mongoose.model('pc-char', CharSchema, 'pc-chars')

/**
 * Add new character to database
 * @param {Object} char the character to add
 * @param {Object} char.char the character data
 * @param {String} char.char.image the character image url
 * @param {String} char.char.name the character original name
 * @param {String} char.char.alias the character English alias
 * @param {Number} char.char.rarity the character initial rarity rank
 * @param {String} char.type the type of the character
 * @param {Object} char.skills the skill data of the character
 * @param {String} char.skills.union the Union Burst of the character
 * @param {String} char.skills.skill1 the Skill 1 of the character
 * @param {String} char.skills.skill2 the Skill 2 of the character
 * @param {String} char.skills.ex the Ex Skill of the character
 * @param {String} char.unique the unique weapon of the character
 * @returns {Promise} the saved character
 */
module.exports.add = function(char) {
  const newChar = new Char(char);

  return newChar.save();
}

/**
 * Get all characters in database
 * @returns {Promise} Array of characters
 */
module.exports.get = function () {
  return Char.find().exec();
}