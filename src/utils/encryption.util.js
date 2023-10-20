import { bcrypt } from "../../init.module.js"

export default async function Hash (data){ 
  const hassed =  bcrypt.hash(data,+process.env.SALT)
  return hassed
}