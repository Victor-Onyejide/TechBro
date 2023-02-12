const express = require('express');
const  router = express.Router();

const { postContent, getAllContent, getQuestion, editPost, deletePost, findQuestion } = require('../controllers/index');
const {register} = require('../controllers/user')
router.route('/post').post(postContent);
router.route('/allposts').get(getAllContent);
router.route('/:id').get(getQuestion).patch(editPost).delete(deletePost);
router.route('/allposts/search').post(findQuestion);

router.route('/users/register').post(register);

module.exports = router; 