import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());


// Routes
import userRouter from './routes/user.routes.js';


// Route declaration
app.use("/api/v1/users", userRouter);

// if u are using api then first please define it-> http://localhost:8000/api/v1/users -> its a standard practice that follow by company



export {app};