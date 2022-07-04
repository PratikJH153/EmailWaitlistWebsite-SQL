const express = require("express");
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "join_us",
});

const app = express();

app.get("/", (req, res) => {
    con.query("SELECT COUNT(*) AS total FROM users", function(err, results){
        if(err) throw err;
        var count = results[0].total;
        res.send("We have " + count + " users");
    });
});

app.get("/joke", (req, res) => {
    res.send("Knock Knock...");
});

app.get("/random_num", (req, res) => {
    var num = Math.floor(Math.random() * 10) + 1;
    res.send("Your lucky num is: " + num);
});


app.listen(3000, () => {
    console.log("Server is running on 3000");
});

con.end();