import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Category from "./category.js";

const SubCategory = sequelize.define(
  "SubCategory",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
      onDelete: "CASCADE", // optional: deletes subcategories if category is deleted
    },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    color: { type: DataTypes.STRING, allowNull: false },
    icon: { type: DataTypes.STRING, allowNull: false },
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
  },
  {
    timestamps: true,
  }
);

export default SubCategory;
