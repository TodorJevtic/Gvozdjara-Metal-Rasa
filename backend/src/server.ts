import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import { dbConnect } from './configs/database.config';
import proizvodRouter from './routers/proizvod.router';
import userRouter from "./routers/users.router";
import orderRouter from './routers/order.router';


dbConnect();

const app = express();
app.use(express.json());
//localhost:4200
//localhost:5000
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));


app.use("/api/proizvod", proizvodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);


const port = 5000;
app.listen(port, ()=>{
    console.log("Website runned on http://localhost:" + port);
})