'use strict';

var mongoose = require('mongoose'),
Imagen = mongoose.model('Imagenes');
    
var formidable = require('formidable');
var fs = require('fs');
var util = require('util');

    /* Ajuste de imagen */
    exports.CrearImagen = function(req, res) {
        /* Codigo para las imagenes */
        console.log('Hola mundo')
        console.log(req.body.hola)

        /*console.log('llamada realizada');
        console.log("-----" + req.params);
        console.log("-----" + req.body);

        var form = new formidable.IncomingForm();
        var newpath;

        form.parse(req, function(err, fileds, files) {
            console.log(util.inspect({fileds: fileds, files: files}));
            console.log();
            console.log();
        });*/

        /* Almacenamiento del nombre y ruta de la imagen */

        /*var nuevo_Producto = new Imagen();
        nuevo_Producto.nombre = files.filetoupload.name;
        nuevo_Producto.ruta = newpath;
        nuevo_Producto.save(function(err, producto) {
            if (err)
                res.send(err);
            res.json(producto);
        });*/
    };