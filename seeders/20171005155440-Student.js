'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
*/

      return queryInterface.bulkInsert('Students', [{
        first_name: 'Akbar',
        last_name: 'Sahata',
        email: 'akbarsahata@gamil.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        first_name: 'Orang',
        last_name: 'Biasa',
        email: 'biasaorang@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
