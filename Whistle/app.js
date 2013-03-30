
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

function initEnvironment() {
	homeFolder = __dirname;
	console.log('  info -'.cyan, 'Application root'.yellow, homeFolder); //possible because of the colors module.

	//App configuration
	app.configure(function () {
		app.set('homeFolder',homeFolder);
		app.set('view engine','jade');
		app.set('views', homeFolder + '/views');
		app.set('views');
		app.set('view options', {layout: null});

		//Static resources
		app.use('/js', express.static(homeFolder + '/public/js'));
		app.use('/css',exress.static(homeFolder + '/public/css'));
		app.use('/img',express.static(homeFolder + '/public/img'));
		app.use('/font',express.static(homeFolder +'/public/font'));
		app.use(require('less-middleware')({src: __dirname + '/public'}));
		app.use(express.cookieParser());
		app.use(express.bodyParser());
		app.use(express.session({secret: 'jkhdajhl jsfhaljdh sdfhjhakjh'}));
		app.use(app.router);
	});

	port = parseInt(process.argv[2], 10) || config.server.port;

}
function start() {
	initEnvironment();
	appController.setup(app);
	app.listen(port);

	console.log('Whistle started on'.yellow, (hostname + ':' + port).cyan);
}


	

   
