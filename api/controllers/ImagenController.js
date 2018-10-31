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
    //form.uploadDir = '/cargas'
    upload(req, res, function(err) {
        if (err) {

        }

        console.log(req.files)
        //var archivos = JSON.parse(req.files);

        /*archivos.array.forEach(element => {
            console.log(r.path);
        });*/
        var nuevo_Producto = new Imagen();
        //nuevo_Producto.ruta.
        //console.log(r); 
    })
    

    res.status(200); 
    console.log('Hola mundo')

    /* Almacenamiento del nombre y ruta de la imagen */
    /*var nuevo_Producto = new Imagen();
    nuevo_Producto.nombre = files.filetoupload.name;
    nuevo_Producto.ruta = newpath;
    nuevo_Producto.save(function(err, producto) {
        if (err)
            res.send(err);
        res.json(producto); 
    });*/
}

/* Ajuste de imagen */
module.exports = {
    CrearImagen
}
