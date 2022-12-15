const express = require('express');
const  router = express.Router();

const { postContent, getAllContent, getQuestion } = require('../controllers/index');

router.route('/post').post(postContent);
router.route('/allposts').get(getAllContent);
router.route('/:id').get(getQuestion);

module.exports = router;