require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, 
    dialect: "mysql",
    port: process.env.DB_PORT || 3306, 
  }
);

async function connectionToDb() {
  try {
    await sequelize.authenticate();
    console.log(" Connection to Clever Cloud MySQL successful");
  } catch (err) {
    console.error(" Database connection error:", err);
  }
}

module.exports = { connectionToDb, sequelize };
