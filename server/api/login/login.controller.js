/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Login = require('./login.model');

// Get list of things
exports.index = function(req, res) {
  Login.find(function (err, things) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(things);
  });
};

//数据存入数据库
exports.create = function(req, res) {
  Login.create(req.query, function (err, datas) {
    // console.log("datas ---",datas);
    if(err) { return handleError(res, err); }
    // console.log("success --->datas ", datas);
    return res.status(200).json(datas);

  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
