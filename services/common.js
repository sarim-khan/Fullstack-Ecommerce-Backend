const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  console.log(token)
  //TODO : this is temporary token for testing without cookie
  // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmNhMTIxZjJkOTZkMGQ4NzdiMThlYyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzExNDg0MDI3fQ.doAT4bHW1bJoZKwhslE2lkeqv3PulIU_HEbfQo9Rlsg"
  return token;
};