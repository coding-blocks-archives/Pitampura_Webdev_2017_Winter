const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

const dbConfig = require('../config').DB

const db = new Sequelize(
    dbConfig.NAME,
    dbConfig.USERNAME,
    dbConfig.PASSWORD,
    {
        dialect: 'mysql'
    }
)

const Category = db.define('category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tax_perc: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    }
})

const Product = db.define('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vendor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    }
})

Product.belongsTo(Category)

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const CartItem = db.define('cartItem', {
    quantity: DataTypes.SMALLINT,
    amount: DataTypes.FLOAT
})

CartItem.belongsTo(Product)
CartItem.belongsTo(User)

User.hasMany(CartItem)

db.sync({})
    .then(() => console.log("Database synchronized"))


exports = module.exports = {
    db,
    Category,
    Product,
    User,
    CartItem
}