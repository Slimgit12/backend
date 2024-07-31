const {Sequelize} = require('sequelize')

const database = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
})

module.exports = database