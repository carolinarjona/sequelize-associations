const HttpError = require("../utils/httpError");

const userValidation = (req, res, next) => {
  if (!["user", "admin"].includes(req.user?.role)) throw new HttpError(401);
  next();
};

module.exports = userValidation;
