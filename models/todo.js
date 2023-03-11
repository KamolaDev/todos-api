const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      // unique: true,
      trim: true,
    },
    image:{
      type: String,
      required: true,
      unique: true
    },
    count: {
      type: Number,
      required: false,
      default: 1,
    },
    desc: {
      type: String,
      required: true,
      trim:true,
    }
  },
  { timestamps: true }
); //qacon sozdat qilinga date ni korsatadi

module.exports = mongoose.model("Todo", todoSchema);