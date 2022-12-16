const express = require('express');
const  router = express.Router();

const { postContent, getAllContent, getQuestion, editPost, deletePost } = require('../controllers/index');

router.route('/post').post(postContent);
router.route('/allposts').get(getAllContent);
router.route('/:id').get(getQuestion).patch(editPost).delete(deletePost);

module.exports = router; 