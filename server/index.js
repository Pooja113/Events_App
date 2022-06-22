import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'

import dotenv from 'dotenv'

const app = express();
dotenv.config({path: "server/config.env"})

app.use(bodyParser.json({ limit: "30mb" , extended : true}));
app.use(bodyParser.urlencoded({ limit: "30mb" , extended : true}));
app.use(cors());



app.use('/posts',postRoutes);
app.use('/user',userRoutes);

const DBCONNECTION_URI = process.env.DBCONNECTION_URI
const PORT = process.env.PORT;
mongoose.connect(DBCONNECTION_URI , { useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT} `)))
.catch((error)=> console.log(error.message));


// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

