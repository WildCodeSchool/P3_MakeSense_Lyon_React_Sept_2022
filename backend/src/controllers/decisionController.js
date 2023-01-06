const models = require("../models");

const browse = (req, res) => {
  models.decision
    .findAllWithUserId()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.decision
    .find(req.params.id)
    .then(([result]) => {
      if (!result[0]) {
        res.sendStatus(404);
        return;
      }
      const decision = result[0];
      // verifier si 404
      models.person_expert
        .getExpertUser(req.params.id)
        .then(([decisionExpert]) => {
          decision.experts = decisionExpert;
          models.person_concern
            .getConcernUser(req.params.id)
            .then(([decisionConcern]) => {
              decision.concerns = decisionConcern;
              res.send(decision);
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

const edit = (req, res) => {
  const decision = req.body;

  // TODO validations (length, format...)

  decision.id = parseInt(req.params.id, 10);

  models.decision
    .update(decision)
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

const editById = (req, res) => {
  const decision = req.body;

  // TODO validations (length, format...)

  decision.id = parseInt(req.params.id, 10);

  models.decision
    .updateById(decision)
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
  const decision = req.body;
  const experts = req.body.person_expert;
  const concerns = req.body.person_concern;
  console.warn(experts);

  // TODO validations (length, format...)
  models.decision
    .insert(decision)
    .then(([result]) => {
      models.person_expert
        .insert(result.insertId, experts)
        .then(() => {
          models.person_concern
            .insert(result.insertId, concerns)
            .then(() => {
              res.location(`/decision/${result.insertId}`).sendStatus(201);
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

const readDecisionByUserId = (req, res) => {
  models.decision
    .findByUserId(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  editById,
  readDecisionByUserId,
};
