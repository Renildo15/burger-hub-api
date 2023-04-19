import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import { Request, Response } from "express";

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req:Request, res:Response)=>{
    res.status(200).send({success:"Server On and Connected!"})
})


app.use(cors());

app.listen(PORT, ()=>{
    console.log("Running")
})
