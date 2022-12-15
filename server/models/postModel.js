const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
    author: {type: String, required: true},
    title: {type:String, required: true},
    description: {type:String, required:true},
    language: {type:String , required: true},
    solution: {type:String, required:true},
    difficulty: {type:String, reuired: true},
    url: {type:String, reuired: true}
}, {
    timestampes: true,
})

const Post = mongoose.model('Post', postSchema);
module.exports= Post;