'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    releaseDate: DataTypes.DATE,
    santaBandId: DataTypes.INTEGER,
    coverPhotoUrl: DataTypes.STRING,
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
  };
  return Album;
};