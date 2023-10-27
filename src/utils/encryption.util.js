import { bcrypt } from "../../init.module.js"

export async function Hash (data){ 
  const hassed =  bcrypt.hash(data,+process.env.SALT)
  return hassed
}

export  async function Validate (loginPass,userPass){ 
  const isValid =  bcrypt.compare(loginPass,userPass)
  return isValid
}