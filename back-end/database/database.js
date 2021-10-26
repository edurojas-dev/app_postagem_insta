const Sequelize = require("sequelize")
const connection = new Sequelize(
    "postagem_insta",   // name database
    "root",             //user root
    "xxxxxxx",         //password
    {host: "localhost", dialect: "mysql"}
)

module.exports = connection
