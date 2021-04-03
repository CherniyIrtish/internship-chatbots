module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shop', [
      {
        address: 'Shevchenko 100',
        cashRegisterNumber: 8,
      },
      {
        address: 'Franka 18',
        cashRegisterNumber: 6,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shop', null, {});
  },
};
