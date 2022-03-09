const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "m7az7525jg6ygibs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "tyipcikp4wpvvlgt",
	password: "mbtfl3a90fpdtf7y",
	database: "idr7x73j1rmc5n2y",
	multipleStatements: false,
	reconnect: true,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "lab_example",
	multipleStatements: false,
	reconnect: true,
	namedPlaceholders: true
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		