'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const genres = await queryInterface.bulkInsert('Genres', [
      { name: "Pop" },
      { name: "Rock" },
      { name: "Hip-hop" },
    ], {
      returning: true
    });
  
    const popGenreId = genres[0].id;
    const rockGenreId = genres[1].id;
    const hipHopGenreId = genres[2].id;

    const bands = await queryInterface.bulkInsert("SantaBands", [
      { name: "Rudolph and the Jammy Jams" },
      { name: "BORK" },
    ], { returning: true });
    
    const rudolphId = bands[0].id;
    const borkId = bands[1].id;

    const santaBandGenres = await queryInterface.bulkInsert("SantaBandGenres", [
      { santaBandId: rudolphId, genreId: popGenreId, },
      { santaBandId: borkId, genreId: rockGenreId, },
      { santaBandId: borkId, genreId: hipHopGenreId, }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete("Genres", {
      name: { [Sequelize.Op.in]: ["Pop", "Rock", "Hip-hop"] }
    });
    await queryInterface.bulkDelete("SantaBands", {
      name: { [Sequelize.Op.in]: ["Rudolph and the Jammy Jams", "BORK"] }
    });
  }
};
