"use strict";
var rethinkdb = require("rethinkdb");
var connect = require('./app/connect.js');

connect(function (conn) {

  /*
  rethinkdb.table('auther').indexCreate('name').run(conn, function (error, result) {
    if (error) throw error;
    console.log('result', result);
  });

  rethinkdb.table("auther").indexWait("name").run(conn, function (error, result) {
    if (error) throw error;
    console.log('result', result);
  });
  */

  rethinkdb.table("auther").getAll("张三", {index: "name"}).run(conn, function (error, res) {
    if (error) throw error;
    res.toArray(function (error, data) {
      console.log(data);
    })
  })

  rethinkdb.table('auther').between(['张三'], ['李四']).run(conn, function (error, result) {
    if (error) throw error;
    result.toArray(function (error, data) {
      console.log('data', data);
    })
  });

});
