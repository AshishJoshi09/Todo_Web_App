const express = require("express");
const mongoose = require("mongoose");

const path = require("path");
require("./db");

const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todos");


const app = express();
const cors = require("cors");
app.use(cors());
const Port = 3000;



  app.use(express.json());

  app.use("/auth",authRoutes);
  app.use("/api", todoRoutes);


app.use(express.static(path.join(__dirname, "../Frontend")));

  app.listen(Port , () =>{
    console.log("Server is listening to post "+Port )
  })