/*
 * helpers/db.js
 * This helper is a singleton implementation of the cassandra db connection.
 * We could use this across different models. It is based on the cassandra-driver
 */

var cassandra = require('cassandra-driver');
var dbConn;

if (dbConn) {
    module.exports = dbConn;
} else {
    dbConn = new cassandra.Client({contactPoints: ['localhost'], keyspace: 'sample'});
    module.exports = dbConn;
}