const express = require('express');
const router = express.Router();

const user = require("../controllers/user.controller.js");

router.post('/', user.create);
router.post('/register', user.register);
router.post('/login', user.login);

  

module.exports = router;
