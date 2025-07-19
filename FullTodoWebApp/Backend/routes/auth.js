const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
const {auth,JWT_SECRET} = require("../middleware/authorization");

app.use(express.json());

app.post("/signup", async function(req, res){
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    try {
        await UserModel.create({ email, password, username });
        res.json({ message: "Signup successful" });
    } catch (error) {   // ✅ Add error as parameter
        console.error("Signup error:", error);  // ✅ Now you'll see the real issue
        res.status(500).json({ message: "Signup failed" });
    }  
});

app.post("/login" , async function(req,res){
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email,
        password
    });

    if(user){
        const token = jwt.sign({
            userId : user._id
        },JWT_SECRET);

        res.json({
            token
        });
    }
    else{
        res.status(403).json({
            message : "Invalid Credentials"
        })
    }
})

module.exports = app;