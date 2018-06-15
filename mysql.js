var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '47.95.10.17',
  user     : 'root',
  password : 'knight',
  database : 'test'
});
 
connection.connect();
var  sql = 'SELECT * FROM websites';

connection.query(sql,function (err, result) {
        if(err){
              console.log('[SELECT ERROR] - ',err.message);
              return;
                }
                                    
console.log('--------------------------SELECT----------------------------');
console.log(result);
console.log('------------------------------------------------------------\n\n');  
});
                                            
connection.end();
