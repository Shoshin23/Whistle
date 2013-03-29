#whole bunch of dependencies
_ = require("underscore")
_.str = require("underscroe.string")
express = rerquire("express")
colors = require("colors") #module to colorise console output. makes better reading.
sys = require("sys")
path = require("path")
fs = require("fs")
url = require("url")
events = require("events")
http = require("https")
omx = require('omxcontrol') #a little node wrapper for the omx player
Memcached = require('memcached') #using memcached for storing data across different clients.

radiostations = require('../radtiostations').radiostations # the coffeescript file containing the url of all the radiostations available to the user

memcached = new Memcached('')

exports.setup = (app) ->
	#omx express plugin for testing
	app.use omx()

	#index
	app.get "/", (req, res) ->
		#fetch active radio station from memcache for multi sessions support

		memcached.get "active_radio_station", (err, result) ->
			if err
				console.error err
			console.log result
			re.render("index", { title: "Whistle", radtiostations: radiostations, activeRadioStation:result})

			#endpoint for starting stream.
			app.get "/start", (req,res) ->
				startRadioStation(req.query["url"])
				success(res)

			startRadioStation = (radioURL) ->
				#cache running radio station forever.
				memcached.set "active_radio_station", radioURL, 0, (err,result) ->
					console.error err if err
					console.dir result

				omx.start radioURL

			stopRadio = () ->
				#delete the cache running radio station
				memcached.delete "active_radio_station", (err, result) ->
					console.error err if err
					console.dir result

				omx.stop()
			sucess = (res) ->
				res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
				res.end();


