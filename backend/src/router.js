const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: process.env.UPLOAD_DIR });

/** ******************* Déclarations Provenances Requêtes ***************** */

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

/** **************************** Gestion USERS ********************** */

router.get("/user", userControllers.browse);
router.get("/user/bytoken", verifyToken, userControllers.findByToken);
router.get("/user/byname", userControllers.browseByName);
router.get("/user/:id", verifyToken, userControllers.read);
router.put("/user/:id", verifyToken, userControllers.edit);
router.delete("/user/:id", userControllers.destroy);

/** ************ Gestion AUTHENTIFICATION, Register et Login ********** */

router.post("/user", verifyEmail, hashPassword, userControllers.add);
router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

/** **************************** Gestion DECISIONS ********************** */

router.get("/decision", verifyToken, decisionControllers.browse);
router.get("/decision/last", verifyToken, decisionControllers.readByLast);
router.get("/decision/:id", verifyToken, decisionControllers.read);
router.get(
  "/decision-byuser/:id",
  verifyToken,
  decisionControllers.readDecisionByUserId
);
router.put("/decision/:id", verifyToken, decisionControllers.editById);
router.post("/decision", verifyToken, decisionControllers.add);
router.delete("/decision/:id", verifyToken, decisionControllers.destroy);

/** ****************** Gestion Upload Fichiers ************************* */

router.post(
  "/avatar",
  verifyToken,
  upload.single("avatar"),
  fileControllers.renameAvatar,
  userControllers.updateAvatar
);
router.get("/avatar/:fileName", fileControllers.sendAvatar);

/** ****************** Gestion commentaire ************************* */

const commentControllers = require("./controllers/commentController");

router.get("/comments", commentControllers.browse);
router.get("/decision/:id", decisionControllers.read);
router.post("/decision/:id/comments", verifyToken, commentControllers.add);
router.put("/decision/:id/comments/:id", verifyToken, commentControllers.edit);
router.delete("/decision/:id/comments", commentControllers.destroy);

module.exports = router;
