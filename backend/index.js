const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUrl = `mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PASS}@cluster0.ukf0r.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_APPNAME}`;

const corsOrigin = `http://localhost:5173/`;

mongoose.connect(mongoUrl).then(()=>console.log('Mongo Connected...')).catch(err=>console.log(err));

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
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Backend running on port: ${PORT}`);
})