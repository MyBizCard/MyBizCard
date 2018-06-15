const Sequelize = require('sequelize')
const db = require('../db')

const Experience = db.define('experience', {
  company: {
    type: Sequelize.STRING,
    allowNull: false
  },
  department: {
    type: Sequelize.STRING,
  },
  jobTitle: {
    type: Sequelize.STRING,
    allowNull: false
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
  },
  description: {
      type: Sequelize.TEXT,
  }
})

module.exports = Experience