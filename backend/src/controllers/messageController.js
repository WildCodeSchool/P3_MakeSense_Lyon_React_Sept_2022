const models = require("../models");

const browseMessage = (req, res) => {
  models.message_help
    .findAll()
    .then(([result]) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const addMessage = (req, res) => {
  models.message_help
    .insertMessage(req.body)
    .then(([result]) => {
      res.location(`/admin/message/${result.id}`).send(result).status(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browseMessage,
  addMessage,
};
