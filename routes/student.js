const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const studentController = require("../controllers/student");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, studentController.getStudent);

router.post("/createStudent", upload.single("file"), studentController.createStudent);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
