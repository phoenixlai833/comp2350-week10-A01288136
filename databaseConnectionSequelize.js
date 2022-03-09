const is_heroku = process.env.IS_HEROKU || false;
const dbConfigHeroku = "mysql://tyipcikp4wpvvlgt:mbtfl3a90fpdtf7y@m7az7525jg6ygibs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/idr7x73j1rmc5n2y";
const dbConfigLocal = "mysql://root:password@localhost/lab_example";
if (is_heroku) {
var databaseConnectionString = dbConfigHeroku;
}
else {
var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;