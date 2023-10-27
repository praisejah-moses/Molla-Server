import { db } from '../../init.module.js';


// DATABASE SCHEMA AND MODEL
const UserSchema = new db.Schema({
  firstname: {
    type: String,
    required: true,
  },  
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
    lowercase:true
  },
  verified: {
    type:Boolean,
    default:false
  },
  password: {
    type: String,
    required: true,
  }
}, {timestamps:true})

export const UserModel = db.model("User", UserSchema);