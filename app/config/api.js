require("dotenv").config();
require("./database").connect();
const express = require("express");
const router = express.Router();
const cors = require("cors");

const tutorial = require("../routes/tutorial.routes.js");
const user = require("../routes/user.routes");

router.use(express.json());

// Logic goes here
router.use("/tutorial", tutorial);
router.use("/user", user);  




module.exports = router;
