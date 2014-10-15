/*
 * models/User.js : User model definition
 */

var db = require('../helpers/db.js');

//------------------------------------------------------------------------------
//                           DATABASE FUNCTIONS
//------------------------------------------------------------------------------

var insertUserDb = function (user, cb) {
    var insertUserQuery = "INSERT INTO sample.users (username, name, gender,"
        + " address) VALUES (?, ?, ?, ?)";
    var params = [user.username, user.name, user.gender, user.address];
    db.execute(insertUserQuery, params, { prepare: true }, function (err) {
        if (err) cb(err, "db error in inserting new user");
        else cb(null, "new user : " + user.username
            + " inserted successfully !!!");
    });
};

var getUserDb = function (username, cb) {
    var getUserQuery = "SELECT * FROM sample.users WHERE username = ?";
    var params = [username];
    db.execute(getUserQuery, params, { autoPage: true }, function (err, result) {
        if (err) cb(err, "db error in getting user data");
        else {
            delete result.rows[0].__columns;
            cb(null, result.rows[0]);
        }
    });
};

//------------------------------------------------------------------------------
//                           INTERNAL FUNCTIONS
//------------------------------------------------------------------------------

var isValid = function (user, cb) {
    // validate user data
    if (user.username) {
        console.log("validating username...\n validation successful");
        cb(null, user);
    } else cb("invalid", "username not defined");
};

//------------------------------------------------------------------------------
//                           EXTERNAL FUNCTIONS
//------------------------------------------------------------------------------



exports.get = function (username, cb) {
    // get user by username
    getUserDb(username, cb);
};

exports.save = function (user, cb) {
    // validate and save new user
    isValid(user, function (err, user) {
        if (err) cb(err, user);
        else insertUserDb(user, cb);
    });
};