const cloudinary = require("../middleware/cloudinary");
const Student = require("../models/Student");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const students = await Student.find({ user: req.user.id });
      res.render("profile.ejs", { students: students, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getCaseload: async (req, res) => {
    try {
      const students = await Student.find().sort({ createdAt: "desc" }).lean();
      res.render("caseload.ejs", { students: students });
    } catch (err) {
      console.log(err);
    }
  },
  getStudent: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      res.render("student.ejs", { student: student, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createStudent: async (req, res) => {
    try {
      // Upload image to cloudinary
      // const result = await cloudinary.uploader.upload(req.file.path);

      await Student.create({
        studentName: req.body.studentName,
        // image: result.secure_url,
        // cloudinaryId: result.public_id,
        disability: req.body.disability,
        strengths: req.body.strengths,
        areasOfGrowth: req.body.areasOfGrowth,
        accommodations: req.body.accommodations,
        user: req.user.id,
      });
      console.log("Student has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  deleteStudent: async (req, res) => {
    try {
      // Find student by id
      let student = await Student.findById({ _id: req.params.id });
      // Delete student from db
      await Student.remove({ _id: req.params.id });
      console.log("Deleted Student");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
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

