
import pkg from 'sequelize';
import db from '../../config/database';

const { Model, DataTypes } = pkg;

class ReservationDao extends Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4 
      },
      date: DataTypes.DATE, 
UserId: DataTypes.UUID,
ProductId: DataTypes.UUID

    },

   { sequelize, modelName: 'Reservation' });
  }

  static associate(models) {
    this.belongsTo(models.Product)
    this.belongsTo(models.User )
    return this;
  }
}

ReservationDao.init(db.sequelize);

export default ReservationDao;
