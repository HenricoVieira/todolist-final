//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async () => {
    const atlas = await mongoose.connect('mongodb+srv://LorenzoAcquesta:acquesta712399@cluster0.umqxy.mongodb.net/test')
}

//exportar as informações para acesso externo
module.exports = conn
