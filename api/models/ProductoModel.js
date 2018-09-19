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

ProductoSchema.query.porNombre = function(name) {
    return this.where({ nombre: name});
};

module.exports = mongoose.model('Productos', ProductoSchema);