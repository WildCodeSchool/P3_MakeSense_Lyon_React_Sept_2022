const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;

const userControllers = require("./controllers/userControllers");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);
router.delete("/user/:id", userControllers.destroy);

module.exports = router;

const decisionControllers = require("./controllers/decisionController");

router.get("/decision", decisionControllers.browse);
router.get("/decision/:id", decisionControllers.read);
router.put("/decision/:id", decisionControllers.edit);
router.post("/decision", decisionControllers.add);
router.delete("/decision/:id", decisionControllers.destroy);

module.exports = router;
