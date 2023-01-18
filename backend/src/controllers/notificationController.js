const models = require("../models");

const browse = (req, res) => {
  models.notification
    .findNotificationByUserId(req.params.id)
    .then(([result]) => {
      if (!result[0]) {
        res.sendStatus(404);
      }
      models.user
        .getUserByName()
        .then(() => {
          res.send(result);
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

module.exports = {
  browse,
};
