var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexion: '));
db.once('open', function() {
  var Task = require('./api/models/todoListModel');
  var Producto = require('./api/models/ProductoModel');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  var routes = require('./api/routes/todoListRoutes'); //importing route
  routes(app); //register the route
  var anotherroutes = require('./api/routes/ProductoRoutes');
  anotherroutes(app);

  app.listen(port);
  console.log('todo list RESTful API server started on: ' + port);
});


