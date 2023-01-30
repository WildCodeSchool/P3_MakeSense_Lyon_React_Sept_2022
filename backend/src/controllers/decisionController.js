/* eslint-disable prefer-destructuring */
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
              models.comment
                .getComments(req.params.id)
                .then(([decisionComments]) => {
                  decision.comments = decisionComments;
                  res.send(decision);
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
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readByLast = (req, res) => {
  models.decision
    .findLastdecision()
    .then(([result]) => {
      res.send(result);
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
  const expert = req.body.person_expert;
  const concern = req.body.person_concern;
  // TODO validations (length, format...)
  decision.id = parseInt(req.params.id, 10);

  models.decision
    .updateById(decision)
    .then(([result]) => {
      // delete person_expert before insert new person
      models.person_expert
        .deleteExpert(decision.id)
        .then(() => {
          models.person_concern.deleteConcern(decision.id).then(() => {
            if (result.affectedRows === 0) {
              res.sendStatus(404);
            } else {
              models.person_expert.insert(decision.id, expert).then(() => {
                models.person_concern
                  .insert(decision.id, concern)
                  .then(() => {
                    res
                      .location(`/decision/${decision.insertId}`)
                      .sendStatus(201);
                  })
                  .catch((err) => {
                    console.error(err);
                    res.sendStatus(500);
                  });
              });
            }
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

const add = (req, res) => {
  const decision = req.body;
  const experts = req.body.person_expert;
  const concerns = req.body.person_concern;
  const notif = req.body.notif;

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
              models.notification
                .insert(result.insertId, notif)
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
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const decisionId = parseInt(req.params.id, 10);
  models.person_concern.deleteConcern(decisionId).then(() => {
    models.person_expert.deleteExpert(decisionId).then(() => {
      models.comment
        .deleteCommentByDecisionId(decisionId)
        .then(() => {
          models.notification
            .deleteNotificationByDecisionId(decisionId)
            .then(() => {
              models.decision
                .delete(decisionId)
                .then(() => {
                  res.sendStatus(204);
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
    });
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

// Put every decision_id from result in an array to pass to manager
const idsDecisionsOnlyPour = (result) => {
  const ids = [];
  for (const element of result) {
    ids.push(element.decision_id);
  }
  return ids;
};
// update status decision to "terminee depending on date and vote"
const autoUpdateStatusTDecisionTermineeByDateAndVote = (req, res) => {
  models.decision.findIdByVoteAndDateDecisionPour().then(([result]) => {
    models.decision
      .updateStatusTerminee(idsDecisionsOnlyPour(result))
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });
};
// execute function every day
setInterval(
  autoUpdateStatusTDecisionTermineeByDateAndVote,
  1000 * 60 * 60 * 24
);

// Put every decision_id from result in an array to pass to manager
const idsDecisionsContre = (result) => {
  const ids = [];
  for (const element of result) {
    ids.push(element.decision_id);
  }
  return ids;
};
// update status decision to "terminee depending on date and vote"
const autoUpdateStatusTDecisionNonAboutieByDateAndVote = (req, res) => {
  models.decision.findIdByVoteAndDateDecisionContre().then(([result]) => {
    models.decision
      .updateStatusNonAboutie(idsDecisionsContre(result))
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });
};
// execute function every day
setInterval(
  autoUpdateStatusTDecisionNonAboutieByDateAndVote,
  1000 * 60 * 60 * 24
);

// update status decision to "terminee" depending on date_conflict (end of decision)
const autoUpdateStatusTermineeWithDateConflict = (req, res) => {
  models.decision
    .updateStatusTermineeByDateConflict()
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
// execute function every day
setInterval(autoUpdateStatusTermineeWithDateConflict, 1000 * 60 * 60 * 24);

// update status decision to "terminee" depending on date_conflict (end of decision)
const autoUpdateStatusNonAboutieWithDateConflict = (req, res) => {
  models.decision
    .updateStatusNonAboutieByDateConflictnpm()
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
// execute function every day
setInterval(autoUpdateStatusNonAboutieWithDateConflict, 1000 * 60 * 60 * 24);

// search decision by page (in front)
const browseByPageAndFilter = (req, res) => {
  const page = parseInt(req.query.currentPage, 10);
  const limit = parseInt(req.query.decisionPerPage, 10);
  const offset = (page - 1) * limit;
  const status = req.query.status;

  models.decision
    .findNbOfDecisions(status)
    .then(([nbDecision]) => {
      if (nbDecision[0].nbDecision === 0) {
        res.send({ rows: [], nbDecision: nbDecision[0] });
      } else {
        models.decision
          .findByPageAndFilter(limit, offset, status)
          .then(([rows]) => {
            if (rows[0] == null) {
              res.sendStatus(404);
            } else {
              res.send({ rows, nbDecision: nbDecision[0] });
            }
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      }
    })

    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// search all decision for admin
const browseAllByPageAndFilter = (req, res) => {
  const page = parseInt(req.query.currentPage, 10);
  const limit = parseInt(req.query.decisionPerPage, 10);
  const offset = (page - 1) * limit;

  models.decision
    .findAllNbOfDecisions()
    .then(([nbDecision]) => {
      if (nbDecision[0].nbDecision === 0) {
        res.send({ rows: [], nbDecision: nbDecision[0] });
      } else {
        models.decision
          .findAllByPageAndFilter(limit, offset)
          .then(([results]) => {
            if (results[0] == null) {
              res.sendStatus(404);
            } else {
              console.warn("result ", results);

              const decisions = [];
              results.forEach((result) => {
                let decision = decisions.find(
                  (element) => element.decisionId === result.decisionId
                );
                if (decision === undefined) {
                  decision = {
                    ...result,
                    personExpert: [],
                    personConcerne: [],
                  };
                  decisions.push(decision);
                }
                if (
                  !decision.personExpert.some(
                    (element) => element.expertedId === result.expertedId
                  )
                ) {
                  decision.personExpert.push({
                    expertedId: result.expertedId,
                    lastname: result.expertedLastname,
                    firstname: result.expertedFirstname,
                  });
                }
                if (
                  !decision.personConcerne.some(
                    (element) => element.concernedId === result.concernedId
                  )
                ) {
                  decision.personConcerne.push({
                    concernedId: result.concernedId,
                    lastname: result.concernedLastname,
                    firstname: result.concernedFirstname,
                  });
                }
              });
              res.send({ rows: decisions, nbDecision: nbDecision[0] });
            }
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
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
  readByLast,
  autoUpdateStatusTDecisionTermineeByDateAndVote,
  autoUpdateStatusTDecisionNonAboutieByDateAndVote,
  autoUpdateStatusTermineeWithDateConflict,
  autoUpdateStatusNonAboutieWithDateConflict,
  browseByPageAndFilter,
  browseAllByPageAndFilter,
};
