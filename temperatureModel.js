var temp = mongoose.model('temp', tempSchema);

//defining the schema
var tempSchema = new Schema({name:String, time:Date, temp:Number}); 
//assigning function to the methods object of tempSchema
tempSchema.methods.findTempToday = function (cb) {
	return.this.model('temp').find ({ name: this.name }, cb);

}