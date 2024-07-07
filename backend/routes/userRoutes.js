const express = require("express");
const { protect } = require("../middleware/authMiddleware.js");
const router = express.Router();
const {
  registerUser,
  loginUser,
  allUsers,
} = require("../controllers/userController.js");

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", loginUser);

module.exports = router;
