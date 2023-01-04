const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const authControllers = require("./controllers/authController");
const userControllers = require("./controllers/userControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/auth");

const { verifyEmail } = require("./middlewares/verifyEmail");

router.get("/user", userControllers.browse);
router.get("/user/byname", userControllers.browseByName);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", verifyEmail, hashPassword, userControllers.add);
router.delete("/user/:id", userControllers.destroy);
router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

const decisionControllers = require("./controllers/decisionController");

router.get("/decision", verifyToken, decisionControllers.browse);
router.get("/decision/:id", verifyToken, decisionControllers.read);
router.put("/decision/:id", verifyToken, decisionControllers.editById);
router.post("/decision", verifyToken, decisionControllers.add);
router.delete("/decision/:id", decisionControllers.destroy);

module.exports = router;
