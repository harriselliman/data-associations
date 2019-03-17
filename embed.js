var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// USER - email, name

var userSchema = new mongoose.Schema({
    email: String,
    name: String
});

var User = mongoose.model("User", userSchema);