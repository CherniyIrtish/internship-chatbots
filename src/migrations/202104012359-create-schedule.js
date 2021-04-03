module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cashierId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shopId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cashRegisterNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shiftType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weekDay: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }),
  down: (queryInterface) => queryInterface.dropTable('Schedules'),
};
