'use strict';



module.exports = function(app) {
    /*var multer = require('multer')*/
    var productoList = require('../controllers/ProductoController');
    var imagenList = require('../controllers/ImagenController');

    /*var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'cargas/')
        },
        filename: function (req, file, cb) {
          cb(null, file.fieldname + '-' + Date.now())
        }
      })*/

    //var upload = multer({ storage: storage }).single('file');

    app.route('/Producto')
        .get(productoList.Productos)
        .post(productoList.CrearProducto);
    
    app.route('/Producto/:productoId')
        .get(productoList.Producto);

    app.route('/Producto/Buscar/:nombre')
        .get(productoList.BuscarProducto);

    app.route('/Imagen')
        .post(imagenList.CrearImagen);
};