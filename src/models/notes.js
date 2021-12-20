const { Schema, model } = require("mongoose");

new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  /*
  created: {
    type: Date,
    default: Date.now,
  }
  */
});
