module.exports = function(sequelize, DataTypes) {
  var taco = sequelize.define("tacos", {
    taco_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
    timestamps: false
  });
  console.log("coucou taco.js");
  return taco;
};
