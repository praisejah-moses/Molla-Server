import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));


// API ENDPOINTS
app.get("/", (req, res) => {
  res.send("API SERVER IS RUNNING");
});


app.listen(process.env.DEV_PORT, () => {
    console.log(`SERVER RUNNING ON PORT:`+process.env.DEV_PORT);
});