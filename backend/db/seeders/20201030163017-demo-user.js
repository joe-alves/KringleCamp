'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'SantaClause',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'Rudolph',
        hashedPassword: bcrypt.hashSync('rainbows'),
      },
      {
        email: faker.internet.email(),
        username: 'SantaClause2',
        hashedPassword: bcrypt.hashSync('greatpassword'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {
      username: { [Sequelize.Op.in]: ['SantaClause', 'Rudolph', 'SantaClause2'] }
    }, {});
  }
};
