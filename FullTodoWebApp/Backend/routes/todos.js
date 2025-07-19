const express = require("express");
const router = express.Router();

const TodoModel = require("../models/Todo");
const { auth , JWT_SECRET} = require("../middleware/authorization");
const jwt = require("jsonwebtoken");


router.post("/todo", auth, async (req, res) => {
  const description = req.body.description;

  try {
    await TodoModel.create({ 
      description,
      status: false,
      userId: req.userId });

    res.json({ message: "Todo created" });

  } 
  catch {
    res.status(500).json({ message: "Failed to create todo" });
  }

});

router.get("/todos", auth, async (req, res) => {
  try {
    const todos = await TodoModel.find({ userId: req.userId });
    res.json({ 
      todos 
    });

  } 

  catch {
    res.status(500).json({ message: "Failed to fetch todos" });
  }

});

module.exports = router;
