const Post = require('../models/postModel')

const getQuestion = async (req, res) => {
    try {
        const question = await Post.findById(req.params.id);
        if(question) { res.json(question)} else { res.status(404).json({message: 'User Not Found'})}
    } catch (error) {
        res.json(error.message)
    }
}

const getAllContent = async (req, res) => {
    try {
        const posts = await Post.find().sort({createdAt: -1})
        res.json(posts)
    } catch (error) {
        res.json(error)
    }
}

const postContent = async (req, res) => {
    try {
        const post = new Post({
            author: req.body.author,
            title: req.body.title,
            description: req.body.description,
            language: req.body.language,
            solution: req.body.solution,
            difficulty: req.body.difficulty,
            url: req.body.url
        })

        const createdPost = await post.save();

        res.json({
            _id: createdPost._id,
            author: createdPost.author,
            title: createdPost.title,
            description: createdPost.description,
            language: createdPost.language,
            solution: createdPost.solution,
            difficulty: createdPost.difficulty,
            url: createdPost.url
        })

    } catch (error) {

        res.json(error.message)

    }
    //Test
    // try {
    // res.json(req.body.test)

    // } catch (error) {
    // res.send(error.message)
    // }


}

module.exports = {
    postContent, getAllContent,getQuestion
}