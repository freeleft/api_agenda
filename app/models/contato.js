/** 
 * Arquivo: api_server.js
 * Author: Free Left Gruoup
 * Descrição: Model contato
 * Data de Criação: 10/02/2019
**/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AgendaSchema = new Schema({
    nome: String,
    email: String,
    telefone: String
});

module.exports = mongoose.model('Contato', AgendaSchema);