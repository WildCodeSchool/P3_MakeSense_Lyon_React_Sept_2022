/* eslint-disable no-alert */
const models = require("../models");

const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  models.user
    .selectEmail(email)
    .then(([result]) => {
      console.warn(email);
      console.warn(result);
      if (email === result[0]?.email) {
        res.sendStatus(401);
        console.warn("cet email existe");
      } else {
        console.warn("cet email n'existe pas ");
        next();
      }
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(501);
    });
};

module.exports = {
  verifyEmail,
};
