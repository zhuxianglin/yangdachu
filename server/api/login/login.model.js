'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
//声明Schema
var LoginSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});
//构建model: mongoose.model('Login', LoginSchema);
module.exports = mongoose.model('Login', LoginSchema);