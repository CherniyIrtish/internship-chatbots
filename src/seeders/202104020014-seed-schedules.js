module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Schedules', [
      {
        cashierId: 1,
        shopId: 2,
        cashRegisterNumber: 3,
        shiftType: '23:00-07:00',
        weekDay: 'tuesday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 1,
        shopId: 1,
        cashRegisterNumber: 2,
        shiftType: '14:00-23-00',
        weekDay: 'monday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 5,
        shopId: 1,
        cashRegisterNumber: 1,
        shiftType: '12:00-20:00',
        weekDay: 'monday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 4,
        shopId: 2,
        cashRegisterNumber: 8,
        shiftType: '23:00-07:00',
        weekDay: 'friday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 5,
        shopId: 1,
        cashRegisterNumber: 2,
        shiftType: '23:00-07:00',
        weekDay: 'monday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 1,
        shopId: 1,
        cashRegisterNumber: 3,
        shiftType: '23:00-07:00',
        weekDay: 'monday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 3,
        shopId: 2,
        cashRegisterNumber: 4,
        shiftType: '23:00-07:00',
        weekDay: 'saturday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 5,
        shopId: 2,
        cashRegisterNumber: 1,
        shiftType: '23:00-07:00',
        weekDay: 'monday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 2,
        shopId: 1,
        cashRegisterNumber: 7,
        shiftType: '12:00-20:00',
        weekDay: 'wednesday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 2,
        shopId: 1,
        cashRegisterNumber: 2,
        shiftType: '23:00-07:00',
        weekDay: 'wednesday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 3,
        shopId: 1,
        cashRegisterNumber: 1,
        shiftType: '14:00-23-00',
        weekDay: 'sunday',
      },
      {
        cashierId: 4,
        shopId: 1,
        cashRegisterNumber: 3,
        shiftType: '9:00-18:00',
        weekDay: 'saturday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 6,
        shopId: 1,
        cashRegisterNumber: 2,
        shiftType: '9:00-18:00',
        weekDay: 'monday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 6,
        shopId: 2,
        cashRegisterNumber: 4,
        shiftType: '23:00-07:00',
        weekDay: 'sunday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 4,
        shopId: 2,
        cashRegisterNumber: 5,
        shiftType: '23:00-07:00',
        weekDay: 'monday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 1,
        shopId: 1,
        cashRegisterNumber: 6,
        shiftType: '23:00-07:00',
        weekDay: 'monday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cashierId: 4,
        shopId: 2,
        cashRegisterNumber: 3,
        shiftType: '12:00-20:00',
        weekDay: 'monday',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Schedules', null, {});
  },
};
