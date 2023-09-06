import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema;

const reportSchema = new Schema(
  {
    userID: {
      type: mongoose.Types.ObjectId,
      requireD: true,
    },

    quizId: {
      type: mongoose.Types.ObjectId,
      requireD: true,
    },
    score: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);

export default Report;
