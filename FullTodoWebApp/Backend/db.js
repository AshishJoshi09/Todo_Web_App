const mongoose = require("mongoose");
const MONGO_URL ="mongodb+srv://aashishhjoshii:Zm2hDHM0O9pJ8qpw@cluster0.qkjszda.mongodb.net/todo_app_database?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));
