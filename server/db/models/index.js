const User = require('./user')
const Address = require('./address')
const Experience = require('./experience')
const HonorAndAward = require('./honorAndAward')
const Link = require('./link')
const Education = require('./education')

User.hasOne(Address)
Address.belongsTo(User)

User.hasMany(Education)
Education.belongsTo(User)

User.hasMany(Experience)
Experience.belongsTo(User)

User.hasMany(HonorAndAward)
HonorAndAward.belongsTo(User)

User.hasMany(Link)
Link.belongsTo(User)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Address,
  Education,
  Experience,
  HonorAndAward,
  Link,
}
