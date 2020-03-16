const userHelper = require("./userHelpers")
const postHelper = require('../posts/postHelpers')


const postUserHandler = (req, res) => {
    const user = {
      name: req.body.name
    } 
   userHelper.insert(user)
   .then(response => res.send(response))
   .catch(err => res.status(500).send({message: err}))
  }
const postPostHandler = (req, res) => {
    const {text} = req.body
    const {id} = req.params
    const post = {
      text : text,
      user_id: id
    }
    postHelper.insert(post)
    .then(response => res.send(response))
    .catch(err => res.status(500).send({message: err}))
  }
const getUsersHandler = (req, res) => {
      userHelper.get()
      .then(users => {
          if(!users.length){
              res.status(200).send({message:"no users in database"})
          }
          else(
            res.status(200).send(users)
          )
      })
      .catch(err => res.status(500).send({message: err}))
  }
const getUserHandler = (req, res) => {
    const {id} = req.params
    userHelper.getById(id)
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send({message: err}))
}
const getUserPostsHandler = (req, res) => {
    const {id} = req.params
    userHelper.getUserPosts(id)
    .then(posts => {
        if(!posts.length){
            res.status(200).send({message: "user has no posts to shows"})
        }
        else{
            res.status(200).send(posts)
        }
    })
    .catch(err => res.status(500).send({message: err}))


}
const deleteUserHandler = (req, res) => {
    const {id} = req.params
    userHelper.remove(id)
    .then(id => res.status(200).send({deleted: id}))
    .catch(err => res.status(500).send({message: err}))
}
const putUserHandler = (req, res) => {
    const {id} = req.params
    userHelper.update(id, req.body)
    .then(() => {
        userHelper.getById(id)
        .then(user => res.status(200).send(user))
    }) 
    .catch(err => res.status(500).send({message: err}))

}


module.exports = {
    postUserHandler,
    postPostHandler,
    getUsersHandler,
    getUserHandler,
    getUserPostsHandler,
    deleteUserHandler,
    postUserHandler,
    putUserHandler
}