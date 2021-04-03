module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(
      'Shop',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        address: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cashRegisterNumber: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        createdAt: false,
        updatedAt: false,
      }
    ),
  down: (queryInterface) => queryInterface.dropTable('Shop'),
};
