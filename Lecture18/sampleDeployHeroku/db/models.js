/**
 * Created by bhavyaagg on 04/02/18.
 */

const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const config = require('../config')

const db = new Sequelize(config.DATABASE_URL);

const Items = db.define('items', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT
  }
})

db.sync().then(() => {
  console.log("DB Synced")
})

exports = module.exports = {
  Items
}