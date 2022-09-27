const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
  goalArea: {
    type: String,
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
  objective1: {
    type: String,
    required: true,
  },
  objective2: {
    type: String,
    required: true,
  },
  objective3: {
    type: String,
    required: true,
  },
  objective4: {
    type: String,
    required: true,
  },
  studentsAssigned: {
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

module.exports = mongoose.model("Goal", GoalSchema);