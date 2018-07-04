var mongoose = require("mongoose");
var passPortLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(passPortLocalMongoose);

module.exports = mongoose.model("User", UserSchema);