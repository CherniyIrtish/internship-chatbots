module.exports = (sequelize: any, DataTypes: any) => {
  const Cashiers = sequelize.define('Cashiers', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Cashiers;
};
