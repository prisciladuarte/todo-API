const controller = require("../controllers/toDoController");

const express = require("express");
const router = express.Router();

router.get("/", controller.getAll);

router.post("/novo", controller.createTask);

router.delete("/delete/:id", controller.deleteTask);

module.exports = router;
