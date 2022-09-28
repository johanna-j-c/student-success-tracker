const cloudinary = require("../middleware/cloudinary");
const Goal = require("../models/Goal");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const students = await Student.find({ user: req.user.id });
      res.render("profile.ejs", { students: students, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const goals = await Goal.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { goals: goals });
    } catch (err) {
      console.log(err);
    }
  },
  getGoal: async (req, res) => {
    try {
      const goal = await Goal.findById(req.params.id);
      res.render("goal.ejs", { goal: goal, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createGoal: async (req, res) => {
    try {
      // Upload image to cloudinary
      // const result = await cloudinary.uploader.upload(req.file.path);

      await Goal.create({
        goalArea: req.body.goalArea,
        // image: result.secure_url,
        // cloudinaryId: result.public_id,
        goal: req.body.goal,
        objective1: req.body.objective1,
        objective2: req.body.objective2,
        objective3: req.body.objective2,
        objective4: req.body.objective2,
        studentsAssigned: req.body.studentsAssigned,
        user: req.user.id,
      });
      console.log("Goal has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
};
//   likePost: async (req, res) => {
//     try {
//       await Post.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           $inc: { likes: 1 },
//         }
//       );
//       console.log("Likes +1");
//       res.redirect(`/post/${req.params.id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   deletePost: async (req, res) => {
//     try {
//       // Find post by id
//       let post = await Post.findById({ _id: req.params.id });
//       // Delete image from cloudinary
//       await cloudinary.uploader.destroy(post.cloudinaryId);
//       // Delete post from db
//       await Post.remove({ _id: req.params.id });
//       console.log("Deleted Post");
//       res.redirect("/profile");
//     } catch (err) {
//       res.redirect("/profile");
//     }
//   },
// };