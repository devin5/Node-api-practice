// creates Router from express
const router = require("express").Router();
const userHelper = require("./userHelpers")
const postHelper = require("../posts/postHelpers")

// validation middleware
const {validatePost, validateUser, validateUserId}= require("./userValidateMiddleWare")

// route handler middleware
const { putUserHandler, deleteUserHandler, getUserPostsHandler, postPostHandler, postUserHandler, getUsersHandler, getUserHandler} = require("./userHandlers")

// get a list of all users
router.get('/', getUsersHandler);

// Post New User
router.post('/', validateUser, postUserHandler );

// get A specific user info
router.get('/:id', validateUserId, getUserHandler);

// Post a New Post to User Id
router.post('/:id/posts', validateUserId, validatePost , postPostHandler);


router.get('/:id/posts',validateUserId, getUserPostsHandler);

router.delete('/:id',validateUserId, deleteUserHandler );

router.put('/:id', validateUserId, validateUser, putUserHandler);



module.exports = router;
