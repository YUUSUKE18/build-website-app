//make routes for each one

module.exports.signup_get = (req, res) => {
  //render page
  res.render("signup");
};

module.exports.login_get = (req, res) => {
  //render page
  res.render("login");
};

module.exports.signup_post = (req, res) => {
  //send data for db
  res.send("new signup");
};

module.exports.login_post = (req, res) => {
  //send data for db and check account
  res.send("user login");
};
