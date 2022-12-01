const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route

  if (!req.session.user_id) {
    console.log('You are not logged in.');
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
