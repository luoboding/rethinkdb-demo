"use strict"
const host = "localhost";
const port = 28015;
const db = "test";
var rethinkdb = require("rethinkdb");
module.exports = function (callback) {
  rethinkdb.connect({host: host, port: port}, function (error, connect) {
    if(error) throw error;
    console.log('------建立链接成功------')
    callback && callback(connect)
  });
}
