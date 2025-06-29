import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
import { dbConnection } from "./database/dbConnection.js";
import  {errorMiddleware} from "./error/error.js";
import reservationRouter from './routes/reservationRoute.js'
import authRoutes from './routes/authroutes.js'
const app=express();

console.log("FRONTEND_URL from env:", process.env.FRONTEND_URL);
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1/reservation',reservationRouter);
app.use("/api/auth",authRoutes);
dbConnection();
app.use(errorMiddleware);


const port = process.env.PORT || 8000;
app.listen(process.env.PORT, ()=>{
    console.log(`Server Running On Port ${process.env.PORT}`);
});

export default app;
