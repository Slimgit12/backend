const Product = require("./Product");
const User = require("./User");

function relations() {
  Product.belongsTo(User, { foreignKey: "userid" });
  User.hasMany(Product, { foreignKey: "userid" });
}

module.exports = relations;
