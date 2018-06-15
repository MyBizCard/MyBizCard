const Sequelize = require('sequelize')
const db = require('../db')

const HonorAndAward = db.define('honorAndaward', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  from: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        isDate: true
    }
  },
  to: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        isDate: true
    }
  }
})

module.exports = HonorAndAward