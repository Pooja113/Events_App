import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js'


const app = express();

app.use(bodyParser.json({ limit: "30mb" , extended : true}));
app.use(bodyParser.urlencoded({ limit: "30mb" , extended : true}));
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,       
//     optionSuccessStatus:200
// }
app.use(cors());



app.use('/posts',postRoutes)

const DBCONNECTION_URL = 'mongodb+srv://site_admin:ud8CB25JsSpG9Zjb@cluster0.bp7fo.mongodb.net/eventsDB?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(DBCONNECTION_URL , { useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
.catch((error)=> console.log(error.message));

