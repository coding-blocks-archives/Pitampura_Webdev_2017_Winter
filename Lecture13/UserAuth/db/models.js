const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const db = new Sequelize('passportdb', 'ppuser', 'pppass', {
    dialect: 'mysql'
})

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: DataTypes.STRING
})

db.sync().then(() => "Database created")

exports = module.exports = {
    db,
    User
}