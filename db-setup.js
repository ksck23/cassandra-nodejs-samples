var db = require('./helpers/db.js');

var createUsersTableQuery = 'CREATE TABLE users (username varchar PRIMARY KEY,'
    + ' name varchar, gender varchar, address varchar);';
var params = [];

db.execute(createUsersTableQuery, params, { prepare: true }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("USERS table created successfully !!!");
    }
});