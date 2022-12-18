require("dotenv").config();
const argon2 = require("argon2");

/* Option for the hash password */
const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

/* Function that hashes the password */
const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.password = hashedPassword;
      console.warn(hashedPassword);
      /*       delete req.body.password; */
      next();
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
};

module.exports = {
  hashPassword,
};
