const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
  street: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  postcode: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        isNumeric: true
    }
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Address