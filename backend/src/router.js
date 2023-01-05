const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: process.env.UPLOAD_DIR });

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
const decisionControllers = require("./controllers/decisionController");
const fileControllers = require("./controllers/fileController");

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

router.get("/decision", verifyToken, decisionControllers.browse);
router.get("/decision/:id", verifyToken, decisionControllers.read);
router.get(
  "/decision-byuser/:id",
  verifyToken,
  decisionControllers.readDecisionByUserId
);
router.put("/decision/:id", verifyToken, decisionControllers.editById);
router.post("/decision", verifyToken, decisionControllers.add);
router.delete("/decision/:id", decisionControllers.destroy);

router.post(
  "/avatar",
  verifyToken,
  upload.single("avatar"),
  fileControllers.renameAvatar,
  userControllers.updateAvatar
);
router.get("/avatar/:fileName", fileControllers.sendAvatar);

module.exports = router;
