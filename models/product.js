const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
    },
    price: {
      type: Number,
      required: [true, "Please provide price"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    company: {
      type: String,
      enum: {
        values: ["ikea", "liddy", "caressa", "marcos"],
        message: "{VALUE} is not supported",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
