import { Sequelize } from 'sequelize/types';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  const Shops = sequelize.define('Shops', {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cashRegisterNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  });
  return Shops;
};
