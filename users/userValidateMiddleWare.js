// function to check if object is empty
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }


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

  module.exports = {
   validateUser
  };