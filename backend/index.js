import express, { json } from "express";
require('dotenv').config();
import { connect } from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUrl = `mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PASS}@cluster0.ukf0r.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_APPNAME}`;

const corsOrigin = `http://localhost:5173/`;

connect(mongoUrl).then(()=>console.log('Mongo Connected...')).catch(err=>console.log(err));

//Middlewares
app.use(
    cors({
        origin: corsOrigin,
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);
app.use(cookieParser());
app.use(json());

app.listen(PORT,()=>{
    console.log(`Backend running on port: ${PORT}`);
})