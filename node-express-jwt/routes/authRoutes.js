// import router package from express
const { Router } = require("express");
// import controller module
const authController = require("../controllers/authController");

//create instance
const router = Router();

//signup route for get req
router.get("/signup", authController.signup_get);

//signup route for post req
router.post("/signup", authController.signup_post);
//login route for get req
router.get("/login", authController.login_get);
//login route for post req
router.post("/login", authController.login_post);

//export modules = share modules with another files
module.exports = router;
