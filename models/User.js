const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const User = dbConnection.define(
  "User",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING(10),
      defaultValue: "user",
    },
  },
  {
    defaultScope: { attributes: { exclude: ["password"] } },
    scopes: { withPassword: { attributes: {} } },
  }
);

User.prototype.toJSON = function () {
  //Definimos el objeto en object.assign y con .get cogemos todos los atributos de user
  //Con this.get cogemos los valores, hacemos una 'copia'
  const attributes = Object.assign({}, this.get());
  delete attributes.password;
  return attributes;
};

module.exports = User;
