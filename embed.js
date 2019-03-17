var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true });

//POST - title, content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);





var newUser = new User({
    email: "harrypotter@hogwarts.edu",
    name: "Harry Potter"
});

newUser.posts.push({
    title: "How to kill voldemort",
    content: "Zap him up with the powerful wand"
});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

// var newPost = new Post({
//     title: "Reflection on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });