'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: {
        type: String
    },
    Descripcion: {
        type: String
    },
    Precio: {
        type: Number
    },
    Create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Productos', ProductoSchema);