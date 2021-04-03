import { Sequelize } from 'sequelize/types';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  const Schedules = sequelize.define('Schedules', {
    cashierId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    shopId: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    cashRegisterNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    shiftType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weekDay: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Schedules;
};
