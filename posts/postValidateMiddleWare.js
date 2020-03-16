
const helper = require("./postHelpers")

function validatePostId(req, res, next) {
    const {id} = req.params 
    helper.getById(id)
    .then( post => {
      if(!post){
        res.status(400).send({message: "no post with this id exists"})
      }
      else{
        next()
      }
    })
  
  }

  function validatePost(req, res, next) {
    const {text} = req.body
    if(isEmpty(req.body)){
      res.status(400).send({message: "missing user data"})
    }
    else if(!text){
      res.status(400).send({message: "missing text feild"})
    }
    else{
      next()
    }
  }
  
  function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  module.exports = {
    validatePost,
    validatePostId

  }