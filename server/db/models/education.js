const Sequelize = require('sequelize')
const db = require('../db')

const Education = db.define('education', {
  school: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  major: {
      type: Sequelize.STRING,
  },
  degree: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  from: {
      type: Sequelize.STRING,
      validate: {
          isDate: true
      }
  },
  to: {
    type: Sequelize.STRING,
    validate: {
        isDate: true
    }
  }
})

module.exports = Education