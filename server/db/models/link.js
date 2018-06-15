const Sequelize = require('sequelize')
const db = require('../db')

const Link = db.define('link', {
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        isUrl: true
    }
  }
})

module.exports = Link