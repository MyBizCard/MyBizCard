const Sequelize = require('sequelize')
const db = require('../db')

const HonorAndAward = db.define('honorAndAward', {
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
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = HonorAndAward