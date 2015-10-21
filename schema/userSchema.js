var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// define a schema
var userSchema = new Schema({ name: String, age: { type: Number, min: 0, max: 200 }, });

// assign a function to the "methods" object of our userSchema
userSchema.methods.findSimilarTypes = function (cb) {
  return this.model('User').find({ name: this.name }, cb);
}

var User = mongoose.model('User', userSchema);
exports.User = User;