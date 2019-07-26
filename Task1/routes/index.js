const express = require("express");
const routes = express.Router();

const mainController = require("../controllers/main");
const myrouteController = require("../controllers/myroute");
const formController = require("../controllers/form");
const resultController = require("../controllers/result");
const timeController = require("../controllers/time.js");
const userController = require("../controllers/user");



routes.get('/', mainController.getData);

routes.get('/myroute/:param', myrouteController.getData);

routes.get('/form', formController.getData);

routes.post('/form', formController.setData);

routes.get('/result', resultController.getData);

routes.get('/time', timeController.getData);

routes.get('/users', userController.getData);

module.exports = routes;