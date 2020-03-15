
const router = require("express").Router();
const helper = require("./userHelpers")
const validater = require("./userValidateMiddleWare")
const handler = require("./userHandlers")

router.post('/', validater.validateUser, handler.postUserHandler );

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}



function validatePost(req, res, next) {
  // do your magic!
}



module.exports = router;
