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
  //TODO : this is temporary token for testing without cookie
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmQ2NTc2Y2EwN2E2NjcyM2RhNjM5MSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxMTEwNjEyMX0.C4jY0LmTmZse-DJuFrO-CXCg8VUgMFPfn3u9Gk0nWx8"
  return token;
};