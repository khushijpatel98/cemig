const express = require('express');
const router = express.Router();

const auth = require("../middleware/auth");

const user = require("../controllers/user.controller.js");

router.post('/', user.create);
router.post('/register', user.register);
router.post('/login', user.login);
router.get('/', auth, user.getUser);

// app.post("/welcome", auth, (req, res) => {
//   res.status(200).send("Welcome 🙌 ");
// });

  

module.exports = router;
