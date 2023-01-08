const models = require("../models");

const edit = (req, res) => {
  const comment = req.body;

  // TODO validations (length, format...)

  comment.id = parseInt(req.params.id, 10);

  models.comment
    .update(comment)
    .then(([result]) => {
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

const add = (req, res) => {
  console.warn(req.body);
  const comment = req.body;
  const experts = req.body.person_expert;
  const concerns = req.body.person_concern;
  console.warn(experts);

  // TODO validations (length, format...)
  models.comment
    .insert(comment)
    .then(([result]) => {
      models.person_expert
        .insert(result.insertId, experts)
        .then(() => {
          models.person_concern
            .insert(result.insertId, concerns)
            .then(() => {
              res.location(`/comments/${result.insertId}`).sendStatus(201);
            })
            .catch((err) => {
              console.error(err);
              res.sendStatus(500);
            });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
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
  edit,
  add,
  destroy,
};
