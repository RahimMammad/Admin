import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRouter from "./src/routers/UserRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRouter);

const port = process.env.port
const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(url)
.then(resp => {
    console.log("Database connected!");
}).catch(err => {
    console.log("Database is not connected!", err);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})