
import pkg from 'sequelize';
import db from '../../config/database';

const { Model, DataTypes } = pkg;

class UserDao extends Model {
  static init(sequelize) {
    return super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
     

    }, { sequelize, modelName: 'User' });
  }

  static associate(models) {
    // define association here
    // this.belongsTo(models.Service);
    this.hasMany(models.Reservation);
    return this;
  }
}

UserDao.init(db.sequelize);

export default UserDao;
