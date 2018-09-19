'use strict';


var mongoose = require('mongoose'),
    Producto = mongoose.model('Productos');

exports.Productos = function(req, res) {
    Producto.find({}, function(err, producto) {
        if (err)
            res.send(err);
        res.json(producto);
    });
};

exports.Producto = function(req, res) {
    Producto.findById(req.params.productoId, function(err, producto) {
        if (err)
            res.send(err);
        res.json(producto);
    });
};

exports.CrearProducto = function(req, res) {
    var nuevo_Producto = new Producto(req.body);
    nuevo_Producto.save(function(err, producto) {
        if (err)
            res.send(err);
        res.json(producto);
    });
};

exports.BuscarProducto = function(req, res) {
    Producto.find().porNombre(req.params.nombre).exec(function(err, producto){
        if (err)
            res.send(err);
        res.json(producto);
    });
    /*Producto.find({ nombre: req.params.nombre}, function(err, producto){
        if (err)
            res.send(err);
        res.json(producto);
    })*/
};