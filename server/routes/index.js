const express = require('express');
const  router = express.Router();

const { postContent, getAllContent, getQuestion, editPost, deletePost, findQuestion } = require('../controllers/index');

router.route('/post').post(postContent);
router.route('/allposts').get(getAllContent);
router.route('/:id').get(getQuestion).patch(editPost).delete(deletePost);
router.route('/allposts/search').post(findQuestion);

module.exports = router; 