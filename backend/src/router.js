const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;

const authControllers = require("./controllers/authController");
const userControllers = require("./controllers/userControllers");
const { hashPassword, verifyPassword } = require("./middlewares/auth");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", hashPassword, userControllers.add);
router.delete("/user/:id", userControllers.destroy);
router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);
module.exports = router;

const decisionControllers = require("./controllers/decisionController");

router.get("/decision", decisionControllers.browse);
router.get("/decision/:id", decisionControllers.read);
router.put("/decision/:id", decisionControllers.edit);
router.post("/decision", decisionControllers.add);
router.delete("/decision/:id", decisionControllers.destroy);

module.exports = router;
