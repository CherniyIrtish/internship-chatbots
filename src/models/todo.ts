module.exports = (sequelize: any, DataTypes: any) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Todo;
};
