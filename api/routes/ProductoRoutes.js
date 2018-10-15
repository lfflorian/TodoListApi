'use strict';
module.exports = function(app) {
    var productoList = require('../controllers/ProductoController');
    var imagenList = require('../controllers/ImagenController');

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