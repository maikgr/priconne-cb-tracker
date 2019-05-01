const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const connection = mongoose.connection;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, (err) => { if (err) console.error(err) });
connection.on('connected', () => console.log('connected to database'));
connection.on('disconnected', () => console.log('disconnected from database'));

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
 * Get all characters in database
 * @returns {Promise} Array of characters
 */
module.exports.get = function () {
  return Char.find().exec();
}