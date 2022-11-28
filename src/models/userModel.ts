import  mongoose, {Schema } from "mongoose";
 import uniqueValidator from "mongoose-unique-validator";


const userSchema = new Schema({
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

});

userSchema.plugin(uniqueValidator);

export default mongoose.model("userModel", userSchema);
