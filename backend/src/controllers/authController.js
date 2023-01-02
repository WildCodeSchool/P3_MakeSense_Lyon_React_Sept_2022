const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  models.user
    .findByEmailWithPassword(email)
    .then(([user]) => {
      if (user[0] != null) {
        [req.user] = user;

        next();
      } else res.sendStatus(401);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(501);
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
};
