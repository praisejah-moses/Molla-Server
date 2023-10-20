import { jwt } from "../../init.module.js";

export const GenerateToken = async (id,_age) => {
    const token = jwt.sign({id}, process.env.SECRET, {
      expiresIn: process.env.EXPIRE,
    })
    return token;
};

export const VerifyToken = async (token) => {
    return jwt.verify(token, process.env.SECRET)
}