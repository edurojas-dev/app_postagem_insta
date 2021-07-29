const Sequelize = require("sequelize")
const connection = require("./database")

//codigo para criar tabela dentro do BD - nome da tabela 'Postagem'
const Postagem = connection.define("postagens", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conteudo1: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    conteudo2: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Postagem.sync({force: false}).then(()=>{
    console.log('tabela criada!')
})

module.exports = Postagem