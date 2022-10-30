const isLoggedIn = async (req, res, next) => {
  try {
    if (req.session.userid) {
    } else {
      return res.redirect("/login");
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

// created a middleware
const isLoggedOut = async (req, res, next) => {
  try {
    // we are saying if user has session id they can go to home
    if (req.session.userid) {
      return res.redirect("/home");
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { isLoggedIn, isLoggedOut };
