var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'photo'
});
 
connection.connect();
 
/*
connection.query(query, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
  console.log('The solution is: ', results.affectedRows);
});
*/
//connection.end();

module.exports = connection;