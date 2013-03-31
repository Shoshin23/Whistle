development =
	server:
	host: "localhost"
	port: 8081

production =
	server:
	host: "localhost"
	port: 8080

exports.config = (if global.process.env.NODE_ENV is "production" then production else "development") #remove the quotes to put it in development.
