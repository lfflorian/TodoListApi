'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imagenSchema = new Schema({
    nombre: String,
    ruta: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Imagenes', imagenSchema);