const { mongoose, Schema } = require("mongoose");
// const uniqueValidator = require("mongoose-unique-validator");
const userShema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  // тут будет ссылка на все чаты данного юзера
});

//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("userModel", userSchema);
