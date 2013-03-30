
/**
 * Module dependencies.
 */
coffeeScript = require("cofee-script");
var port, 
    appController = require('./app/controller'),
    express = require('express'),
    colors = require('colors'),
    hostname = require('hostname'),
    path = require('path'),
    config = require('./config/config').config,
    app = express();

start();


   
