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

router.delete("/todo/:id", async function (req , res){
    try{
      const deleted = await TodoModel.findByIdAndDelete(req.params.id);
      if(!deleted){
        return res.status(404).json({message : "Todo Not Found"});
      }
      res.json({ message: "Todo deleted successfully" });
    }
    catch(error){
       res.status(500).json({ message: "Error deleting todo" });
    }
});

module.exports = router;
