const controller = require("../controllers/toDoController");

const express = require("express");
const router = express.Router();

router.get("/", controller.getAll);

router.post("/novo", controller.createTask);

module.exports = router;
