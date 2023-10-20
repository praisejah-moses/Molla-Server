import { dbFindUser } from "../services/db.service.js";

export default async function FindUser(req,res,next) {
  const { id , email } = req.body

  //check for request body
  if(!id && !email) return res.status(404).json({
        status: 404,
        message:'Details cannot be empty'
    })

  //continue to find user if request body
  const user = await dbFindUser( id, email )
  req.user = user
  next() 
}