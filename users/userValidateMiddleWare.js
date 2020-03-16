const userHelper = require('./userHelpers')

function validateUser(req, res, next) {
    const {name} = req.body
    if(isEmpty(req.body)){
      res.status(400).send({message: "missing user data"})
    }
    else if(!name){
      res.status(400).send({message: "missing user name"})
    }
    else{
      next()
    }
  }

function validateUserId(req, res, next) {
    const {id} = req.params
    userHelper.getById(id)
    .then(user => {
      if(!user){
        res.status(400).send({message: "user does not exist"})
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
    else(
      next()
    )
    
  }

  // function to check if object is empty
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }


  module.exports = {
   validateUser,
   validatePost,
   validateUserId
  };