'use strict';
module.exports = (sequelize, DataTypes) => {
  const SantaBand = sequelize.define('SantaBand', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    bio: DataTypes.TEXT,
    coverPhotoUrl: DataTypes.STRING,
    backgroundImageUrl: DataTypes.STRING
  }, {});
  SantaBand.associate = function(models) {
    // associations can be defined here
  };
  return SantaBand;
};