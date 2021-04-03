import { Sequelize } from 'sequelize/types';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  const Shop = sequelize.define('Shop', {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cashRegisterNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  });
  return Shop;
};
