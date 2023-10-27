import { router } from "../../../../init.module.js";
import {AuthUser, FindUser } from "../../../middleware/exports.js";
import { TryCatch } from "../../../utils/try-catch.utils.js";
import { ConfirmEmail, CreateUser, LoginUser } from "../auth-controllers/exports.js";

router.post("/signup",FindUser,CreateUser);
router.post('/login',FindUser,LoginUser)
router.get('/confirm/:token',AuthUser,ConfirmEmail)

export default router;