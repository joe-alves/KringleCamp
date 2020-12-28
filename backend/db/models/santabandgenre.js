'use strict';
module.exports = (sequelize, DataTypes) => {
  const SantaBandGenre = sequelize.define('SantaBandGenre', {
    santaBandId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  SantaBandGenre.associate = function(models) {
    // associations can be defined here
  };
  return SantaBandGenre;
};