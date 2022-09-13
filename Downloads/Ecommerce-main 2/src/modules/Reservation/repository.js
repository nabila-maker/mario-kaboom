import { ProductDao } from "../Product";

class ReservreservationRepository {
  constructor(reservationDao) {
    this.reservationDAO =reservationDao;
  }

  async findAll() {
    return await this.reservationDAO.findAll();
  }

  async create(reservationEntity) {
    return await this.reservationDAO.create(reservationEntity);
  }

  async findById(UserId) {
    return await this.reservationDAO.findAll({
      include: [{
        model: ProductDao,
      }],
      through: {model: 'UserReservation', where : {UserId}},
      raw: true
    });
  }

  async GetAllByUser(reservationEntity) {
    return await this.reservationDAO.getAll({ 
      through: {model: 'UserReservation', where : {UserId}}, });}

 
}

export default ReservreservationRepository;