const mongoose = require('mongoose')
const shortid = require('shortid')
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
  unique: String,
  tier: Number
})

const Char = mongoose.model('pc-char', CharSchema, 'pc-chars')

/**
 * Get all characters in database
 * @returns {Promise} Array of characters
 */
module.exports.get = function () {
  return Char.find().exec();
}


const userSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  user: {
    username: String,
    level: Number
  },
  roster: {
    owned: [{
      id: String,
      name: String,
      level: Number,
      stars: Number,
      rank: Number,
      gears: String,
      unique: Number
    }],
    notOwned:  [{
      id: String,
      name: String,
      level: Number,
      stars: Number,
      rank: Number,
      gears: String,
      unique: Number
    }]
  },
  teams: {
    name: String,
    chars: [String]
  }
})

const User = mongoose.model('user', userSchema, 'users');

module.exports.addUser = function(user, owned, notOwned) {
  const newUser = new User({
    user,
    roster: {
      owned,
      notOwned
    }
  })
  
  return newUser.save();
}

module.exports.getUser = function (id) {
  return User.findById(id).exec();
}