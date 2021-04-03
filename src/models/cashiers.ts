import { Sequelize } from 'sequelize/types';

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  const Cashiers = sequelize.define('Cashiers', {
    age: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearsOfExperience: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isWorking: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    workedBefore: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  });
  return Cashiers;
};
