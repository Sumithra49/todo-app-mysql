const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const TodoModel = sequelize.define(
  "todo",
  {
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { TodoModel };
