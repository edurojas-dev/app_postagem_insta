const Sequelize = require("sequelize")
const connection = new Sequelize(
    "postagem_insta",   // name database
    "root",             //user root
    "dudu2020",         //password
    {host: "localhost", dialect: "mysql"}
)

module.exports = connection