//alternate schema; it defines all in one.//

var temp = mongoose.model('temp', tempSchema);

//defining the schema
var tempSchema = new Schema({dA_inside: Date,Number, dA_outside: Date,Number, dD_inside: Date,Number, dD_outside: Date,Number, dS_inside:Date,Number, dS_outside: Date,Number});
//assigning function to the methods object of tempSchema
tempSchema.methods.findNumber = function (cb) {
	return.this.model('temp').get({ type: this.type }, cb);
}