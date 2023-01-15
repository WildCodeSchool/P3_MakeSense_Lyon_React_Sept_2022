const models = require("../models");

const browse = (req, res) => {
  models.comment
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const comment = req.body;
  comment.decisionId = parseInt(req.params.id, 10);
  comment.userId = req.payload.sub;

  models.comment
    .insert(comment)
    .then(([result]) => {
      res.location(`/decision/${result.insertId}`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const comment = req.body;

  comment.id = parseInt(req.params.id, 10);

  models.comment
    .update(comment)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(202).send(comment);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.comment
    .delete(req.params.id)
    .then(([result]) => {
      console.warn(result);
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
  edit,
  destroy,
};
