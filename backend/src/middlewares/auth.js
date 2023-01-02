require("dotenv").config();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;
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
      req.body.hashedPassword = hashedPassword;
      console.warn(hashedPassword);
      delete req.body.password;
      next();
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.hashedPassword, req.body.password, hashingOptions)
    .then((isVerified) => {
      if (isVerified) {
        const token = jwt.sign({ sub: req.user.id }, JWT_SECRET, {
          algorithm: "HS512",
          expiresIn: "2h",
        });
        delete req.user.hashedPassword;
        res.send({ token, user: req.user });
      } else res.sendStatus(401);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  try {
    const autorizationHeader = req.headers.authorization;
    if (!autorizationHeader)
      throw new Error("Autorization needed for this route");

    const [type, token] = autorizationHeader.split(" ");
    if (type !== "Bearer") throw new Error("Only Bearer token allowed");
    if (!token) throw new Error("Token needed");

    req.payloads = jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
};
