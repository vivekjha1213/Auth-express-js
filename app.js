import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from './config/connectdb.js';
import userRoutes from "./routes/userRoutes.js";
// import { connection } from "mongoose";

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;


//cors for error handling.....
//cors policy

app.use(cors());

// DataBase Connecion..
connectDB(DATABASE_URL);

//JSON MIDDLEWARES..
app.use(express.json())

//Load Routes..
app.use("/api/user",userRoutes)


app.listen(port, () => {
  console.log(`server listing at http://localhost:${port}`);
});
