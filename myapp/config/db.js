var mysql = require("mysql");
var pool = mysql.createPool({
    host:"47.95.10.17",
    user:"root",
    password:"knight",
    database:"test"
});

function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows);
            connection.release();
        });
    });
}

exports.query = query;