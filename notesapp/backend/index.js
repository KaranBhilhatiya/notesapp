import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db/connection.js';
import userRoute from "./routes/user.route.js";


const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3000


//routesAPI
app.use("/api/v1/user", userRoute )


app.listen(PORT, ()=> {
  connectDB();
  console.log(`server running at ${PORT}`);
  
})
