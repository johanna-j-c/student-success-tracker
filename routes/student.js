const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const studentController = require("../controllers/student");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Student Routes - simplified for now
router.get("/:id", ensureAuth, studentController.getStudent);

router.post("/createStudent", upload.single("file"), studentController.createStudent);

// router.put("/likePost/:id", postsController.likePost);

router.delete("/deleteStudent/:id", studentController.deleteStudent);

module.exports = router;
