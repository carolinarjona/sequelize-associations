const crypto = require("crypto");
const { promisify } = require("util");

const asyncScrypt = promisify(crypto.scrypt);

const encryptPassword = async (password) => {
  const ecryptedPassword = await asyncScrypt(password, process.env.SALT, 32);
  return ecryptedPassword.toString("hex");
};

module.exports = encryptPassword;
