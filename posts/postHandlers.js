const postHelper = require("./postHelpers");

const getPostsHandler = (req, res) => {
  postHelper
    .get()
    .then(posts => res.status(200).send(posts))
    .catch(err => ({ message: err }));
};

const getPostHandler = (req, res) => {
  const { id } = req.params;
  postHelper
    .getById(id)
    .then(post => res.status(200).send(post))
    .catch(err => res.status(500).send({ message: err }));
};

const deletePostHandler = (req, res) => {
  const { id } = req.params;
  postHelper
    .remove(id)
    .then(id => res.status(201).send({ deleted: id }))
    .catch(err => res.status(500).send({ message: err }));
};

const putPostHandler = (req, res) => {
  const { id } = req.params;
  const {text, user_id} = req.body
  


  postHelper
    .update(id, {text, user_id})
    .then(() => {
        postHelper.getById(id)
        .then(post => res.status(200).send(post))
    })
    .catch(err => res.status(500).send({ message: err }));
};

module.exports = {
  getPostsHandler,
  getPostHandler,
  deletePostHandler,
  putPostHandler
};
