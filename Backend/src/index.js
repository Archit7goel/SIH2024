// const fs = require("fs")
// const express = require("express")
// const mongoose = require("mongoose")

// const app = express();
// const PORT = 8000;


// app.use(express.json());

// //connection
// mongoose.connect("mongodb+srv://raunakgola123:Raunak3421@cluster0.bxen3.mongodb.net/City_Forge?retryWrites=true&w=majority&appName=Cluster0")
// .then(() => console.log('Mongodb Connect'))
// .catch((err) => console.log("mongo error", err));

// // Schema
// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     gender: {
//         type: String,
//     },
//     job_title: {
//         type: String,
//     }
// });

// const User = mongoose.model("user", userSchema);

// //post route

// app.post("/api/users", async (req, res) => {
//     const body = req.body;
//     if (
//         !body ||
//         !body.first_name ||
//         !body.last_name ||
//         !body.email ||
//         !body.gender ||
//         !body.job_title

//     ) {
//         return res.status(400).json({msg: "All fields are req..."});
//     }

//     const result = await User.create({
//         firstName: body.first_name,
//         lastName: body.last_name,
//         email: body.email,
//         gender: body.gender,
//         job_title: body.job_title,
//     });
//     console.log("result", result);

//     return res.status(201).json({msg: "success"});
// });

// app.listen(PORT, () => console.log(`server started at PORT: ${PORT}`));

// fs.writeFileSync("./test.txt", "hello raunak")


import mongoose from "mongoose";
import {app} from "./app.js"
import connectDB from "./db/index.js";
import dotenv from "dotenv"

// dotenv.config({
//     path : "./.env"
// })

dotenv.config();

connectDB()
.then(()=>{
    app.on("error",(e)=>{
        console.error("Error : " , e);
    })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
})
.catch((e)=>{
    console.log("MongoDB connection failed!!", e);
})