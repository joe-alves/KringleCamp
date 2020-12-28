'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersSantaBand = sequelize.define('UsersSantaBand', {
    userId: DataTypes.INTEGER,
    santaBandId: DataTypes.INTEGER
  }, {});
  UsersSantaBand.associate = function(models) {
    // associations can be defined here
  };
  return UsersSantaBand;
};