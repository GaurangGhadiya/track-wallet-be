import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: true },
  email: { type: DataTypes.STRING, allowNull: true },
  mobile: {type : DataTypes.BIGINT, allowNull : false, unique : true},
  otp: {type : DataTypes.INTEGER, allowNull : true},
  dob: { type: DataTypes.DATEONLY, allowNull: true },
  gender: { type: DataTypes.ENUM("male", "female", "other"), allowNull: true },
  profileImage: { type: DataTypes.STRING, allowNull: true }, 
  isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
  isMobileVerified: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  isEmailVerified: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
}, {
  timestamps: true,
});

export default User;
