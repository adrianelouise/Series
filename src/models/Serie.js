  const mongoose  = require("mongoose");

  const serieSchema = new mongoose.Schema({
     nome: {
       type:String,
       required: true},
     ano: {
        trype:String,
        required: true},
    genero:{
        trype:String,
        required: true},
     classificacao: {
        trype:String,
        required: true},
     diretor: {
        trype:String,
        requerid: true},

     });

     const Serie = mongoose.mode("Serie",serieSchema);

     module.exports = Serie;