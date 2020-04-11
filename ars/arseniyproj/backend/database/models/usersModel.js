const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100
    },

    password: {
      type: String,
      required: true
    },

    role: {
      required: true,
      type: String
    },

    banned: {
      type: Boolean,
      required: true
    }
  },
  { collection: "users" }
);

const Users = mongoose.model("User", userSchema);
module.exports = { Users };
