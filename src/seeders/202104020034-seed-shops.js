module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shops', [
      {
        address: 'Shevchenko 100',
        cashRegisterNumber: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        address: 'Franka 18',
        cashRegisterNumber: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shops', null, {});
  },
};
