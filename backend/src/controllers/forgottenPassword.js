const { v4: uuidv4 } = require("uuid");
const models = require("../models");

const verifyEmail = (req, res, next) => {
  const { email } = req.body;

  models.user
    .selectEmail(email)
    .then(([users]) => {
      console.warn(users);
      if (users[0] != null) {
        // eslint-disable-next-line prefer-destructuring
        req.user = users[0];

        next();
      } else {
        res.sendStatus(200);
      }
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(501);
    });
};

const createToken = (req, res, next) => {
  const { user } = req;
  user.passwordToken = uuidv4();

  models.user
    .updateForgottenPassword(user)
    .then(() => {
      next();
    })
    .catch((err) => {
      console.warn(err);
    });
};

module.exports = {
  createToken,
  verifyEmail,
};
