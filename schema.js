/*

*/

//var mongoose = require('mongoose');
//mongoose already included. this an alternate version of schema//

var Schema = mongoose.Schema;

var tempSchema = new mongoose.Schema({
  dA_inside:  Date, Number
  dA_outside: Date, Number
  dD_inside:  Date, Number
  dD_outside: Date, Number
  dS_inside:  Date, Number
  dS_outside: Date, Number
});

//compile schema to model
var temp = db.model('temperatures', temperaturesSchema)
console.log("Created model");


