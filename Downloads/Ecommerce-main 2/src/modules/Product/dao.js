
import pkg from 'sequelize';
import db from '../../config/database';

const { Model, DataTypes } = pkg;

class ProductDao extends Model {
  static init(sequelize) {
    return super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.STRING,

    }, { sequelize, modelName: 'Product' });
  }

  static associate(models) {
    // define association here
    // this.belongsTo(models.Service);
    return this;
  }
}

ProductDao.init(db.sequelize);

export default ProductDao;
