const Post = require('../models/postModel')

const getQuestion = async (req, res) => {
    try {
        const question = await Post.findById(req.params.id);
        if (question) { res.json(question) } else { res.status(404).json({ message: 'User Not Found' }) }
    } catch (error) {
        res.json(error.message)
    }
}

const getAllContent = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 })
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

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post) {
            const deletePost = await post.remove();
            res.json({ message: 'Post Deleted', post: deletePost })
        } else {
            res.status(404).json({ message: 'Post Not Found' })
        }

    } catch (error) {

        res.json(error.message)
    }

}

const editPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post) {
            post.author = req.body.author || post.author;
            post.title = req.body.title || post.title;
            post.description = req.body.description || post.description;
            post.language = req.body.language || post.language;

            const updatedPost = await post.save();
            res.send({message: 'Post Updated', user: updatedPost});
        }
    } catch (error) {
        res.json(error.message);
    }
}

const findQuestion =  (req,res) => {

    const title = req.body.searcnInput;
    const lang = req.body.lang;
    const diff = req.body.diff;

    const filt_title = title ? {title:{$regex: req.body.searcnInput} } : {};
    const filt_lang = lang ? {language:req.body.lang} : {};
    const filt_diff = diff? {difficulty: req.body.diff} : {};
    Post.find({...filt_title, ...filt_lang, ...filt_diff}, function (err, docs) {
        if(err){
            res.json(err)
        }
        else{
            res.json(docs)
        }
    });

    
} 

module.exports = {
    postContent, getAllContent,
    getQuestion, editPost, deletePost,
    findQuestion
}