import { UserModel } from "../model/users.model.js";

export const dbCreateUser = async(firstname,lastname,email,password)=>{
    const user = await UserModel.create({
        firstname,
        lastname,
        email,
        password,
    });
    return user
}

export const dbFindUser = async(id,email) =>{
    const user = await UserModel.findOne(
        { $or: [{ _id:id },{ email:email }] }
    ).lean();
    return user
}

export const dbVerifyUser = async (id) => {
    const user = await UserModel.findByIdAndUpdate(
      id,
      { verified: true },
      { new: true }
    ).select('_id username');
  
    return user;
  };