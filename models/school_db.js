var mysql = require('mysql');
var schoolDB = mysql.createConnection({
  host     : 'localhost',
  user     : 'shandy',
  password : 'passpass',
  database : 'school_db'
});
 
schoolDB.connect()

module.exports = schoolDB