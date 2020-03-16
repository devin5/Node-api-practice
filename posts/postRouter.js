const express = require('express')
const router = express.Router();
const {getPostsHandler, getPostHandler, deletePostHandler, putPostHandler} = require("./postHandlers")
const {validatePostId, validatePost} = require("./postValidateMiddleWare")


router.get('/', getPostsHandler);

router.get('/:id', validatePostId, getPostHandler);

router.delete('/:id', validatePostId, deletePostHandler);

router.put('/:id', validatePostId, validatePost, putPostHandler);





module.exports = router;
