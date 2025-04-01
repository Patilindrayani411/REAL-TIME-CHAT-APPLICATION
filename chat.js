const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

// Get Messages
router.get("/", async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

// Save Message
router.post("/", async (req, res) => {
    const { sender, message } = req.body;
    const newMessage = new Message({ sender, message });
    await newMessage.save();
    res.json(newMessage);
});

module.exports = router;
