const PORT = process.env.PORT || 4000;

const DATABASE_URL = process.env.DATABASE_URL ||
  "mysql://testuser:testpass@localhost:3306/testdb"

exports = module.exports = {PORT, DATABASE_URL}