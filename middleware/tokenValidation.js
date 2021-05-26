const { validateToken } = require("../services/jwtService");

// Hacemos un slice para quitar el 'Bearer' que viene por defecto

const tokenValidation = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.slice(7);
    const { id, email, role } = validateToken(token);
    req.user = { id, email, role };
  }
  next();
};

module.exports = tokenValidation;
