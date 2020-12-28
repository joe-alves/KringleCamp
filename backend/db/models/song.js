'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    mp3Url: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    albumId: DataTypes.INTEGER,
    isFeatured: DataTypes.BOOLEAN,
    albumPosition: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};