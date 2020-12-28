"use strict";

const GENRE_NAMES = ["Rock", "Hip-hop", "Jazz", "Pop", "R&B"];

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
    const createdGenres = await queryInterface.bulkInsert(
      "Genres",
      GENRE_NAMES.map((nameString) => {
        return { name: nameString };
      }),
      { returning: true }
    );

    const rockId = createdGenres[0].id;
    const hipHopId = createdGenres[1].id;
    const jazzId = createdGenres[2].id;
    const popId = createdGenres[3].id;
    const rbId = createdGenres[4].id;

    

    return true;
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete(
      "Genres",
      {
        name: { [Sequelize.Op.in]: GENRE_NAMES },
      },
      {}
    );
    return true;
  },
};
