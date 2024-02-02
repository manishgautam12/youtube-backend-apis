import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from"cookie-parser";

const app=express();
app.use(cors());
dotenv.config({
    path: './.env'
});
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// import routes
import userRouter from "./routes/user.routes.js";


// routes declaration

app.use("/api/v1/users",userRouter);


export {app};