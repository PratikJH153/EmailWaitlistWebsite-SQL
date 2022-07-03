const { faker } = require('@faker-js/faker');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "join_us"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });


// var q = "SELECT COUNT(*) AS total FROM users";

// con.query(q, function(error, results, fields){
//     if (error) throw error;
//     console.log(results[0].total);
// });


var persons = [];


for (var i = 0; i < 500; i++){
    var newperson = [faker.internet.email(), faker.date.past()];

    persons.push(newperson);
}

var q = "INSERT INTO users (email, created_at) VALUES ?"

con.query(q, [persons], function(err, result){
    if(err) throw err;
    console.log(result);
});


con.end();