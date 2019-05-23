var mongoose = require("mongoose");
var passPortLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    avatar  : String,
    firstName:String,
    lastName: String,
    email:    String,
    isAdmin:  {type: Boolean, default: false}
});

UserSchema.plugin(passPortLocalMongoose);

module.exports = mongoose.model("User", UserSchema);