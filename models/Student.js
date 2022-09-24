const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: false,
  },
  cloudinaryId: {
    type: String,
    require: false,
  },
  disability: {
    type: String,
    required: true,
  },
  strengths: {
    type: String,
    required: true,
  },
  areasOfGrowth: {
    type: String,
    required: true,
  },
  accommodations: {
    type: Array,
    default: [],
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
