const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const goalController = require("../controllers/goal");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Student Routes - simplified for now
router.get("/:id", ensureAuth, goalController.getGoal);

router.post("/createGoal", upload.single("file"), goalController.createGoal);

// router.put("/likePost/:id", postsController.likePost);

router.delete("/deleteGoal/:id", goalController.deleteGoal);

module.exports = router;