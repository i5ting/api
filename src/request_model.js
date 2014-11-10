var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

//
// CREATE TABLE IF NOT EXISTS qbase_request (
// 	id INTEGER PRIMARY KEY AUTOINCREMENT,
// 	rname string,
// 	url string,
// 	desc Text,
// 	host string,
// 	verb string,
// 	detail Text
// )
var requestSchema = Schema({
  rname: String,
	verb: String,
	url: String,
	host: String,
	detail: String,
	desc:String
});

mongoose.model('RequestModel', requestSchema)

module.exports = mongoose.model('RequestModel');
