const helper = require("./userHelpers")

const postUserHandler = (req, res) => {
    const user = {
      name: req.body.name
    } 
   helper.insert(user)
   .then(response => res.send(response))
   .catch(err => res.status(400).send({message: "could not add user"}))
  }

module.exports = {
    postUserHandler
}