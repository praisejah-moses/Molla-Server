import "dotenv/config.js";
import express from "express";
import { Router } from "express";

import cors from "cors";
export * as db from "mongoose";
export {default as bcrypt} from "bcrypt";
export {default as jwt} from "jsonwebtoken";
export {default as mailer} from "nodemailer";




//express middleware
const app = express();
const router = Router();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10mb' }));



export  {app,router}
