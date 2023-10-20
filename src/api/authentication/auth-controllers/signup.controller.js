import { dbCreateUser } from "../../../services/db.service.js";
import Hash from "../../../utils/encryption.util.js";
import { SendEmail } from "../../../utils/mail.utils.js";
import { GenerateToken } from "../../../utils/token.util.js";

async function CreateUser(req,res) {
    const userAlreadyExist = req.user
    const {firstname,lastname,email,password} = req.body

    if(userAlreadyExist) return res.status(409).json({
        status:409, 
        message:'A user with that email already exist, login to continue'
    })
    
    const userCreated = await dbCreateUser(firstname,lastname,email, await Hash(password))

    if(userCreated){
        const token = await GenerateToken(userCreated._id)
        SendEmail(userCreated.email,'','',token)
        return res.status(201).json({
            status:201,
            message: 'Signup succesfull, confirm your email to continue'
        })
    }
}

export default CreateUser;