const express = require("express");
const { getContacts } = require("../controllers/ChatController");
const router = express.Router();

router.get("/chat", getContacts);

module.exports = router;
