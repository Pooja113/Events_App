import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'

import dotenv from 'dotenv'

const app = express();
dotenv.config({path: "config.env"})

app.use(bodyParser.json({ limit: "30mb" , extended : true}));
app.use(bodyParser.urlencoded({ limit: "30mb" , extended : true}));
app.use(cors());



app.use('/posts',postRoutes);
app.use('/user',userRoutes)
const DBCONNECTION_URI = process.env.DBCONNECTION_URI
const PORT = process.env.PORT;
mongoose.connect(DBCONNECTION_URI , { useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT} `)))
.catch((error)=> console.log(error.message));



