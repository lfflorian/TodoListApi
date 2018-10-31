'use strict';

var mongoose = require('mongoose')
var Imagen = mongoose.model('Imagenes')
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'cargas/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +  file.originalname)
    }
  })

var upload = multer({ storage: storage }).array('file');

var fs = require('fs');
var util = require('util');

function CrearImagen(req, res) {
    var nuevo_Producto = new Imagen();
    nuevo_Producto.nombre = "Nombre",
    

    upload(req, res, function(err) {
        if (err) {

        }

        var archivos = req.files
        archivos.forEach(element => {
            nuevo_Producto.ruta.push(element.path)
        });

        nuevo_Producto.save(function(err, producto) {
            if (err)
                res.send(err);
            res.json(producto);
        });

        return;
    })
    
    res.status(200); 
}

module.exports = {
    CrearImagen
}
