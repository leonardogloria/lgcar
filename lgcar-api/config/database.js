import mongoose from 'mongoose';

module.exports = app => {

    mongoose.connect('mongodb://192.168.99.100/cars');
    mongoose.connection.on('connected',() =>{
        console.log("Conectado no Mongo")
    });
    mongoose.connection.on('disconnected',() =>{
        console.log('Mongoose! Desconectado')
    });
    mongoose.connection.on('error',error =>{
        console.log('Mongoose! Erro de Conexao! ' + error );
    });
    process.on('SIGINT', () => {
        mongoose.connection.close( ()=>{
            console.log('Mongoose! Desconectado pelo termino');
            process.exit(0);
        });
    });
					
}