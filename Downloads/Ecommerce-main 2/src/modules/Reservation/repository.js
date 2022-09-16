import { UserDao } from "../User";

class ReservationRepository {
  constructor(reservationDao) {
    this.reservationDAO =reservationDao;
  }

  async findAll() {
    return await this.reservationDAO.findAll();
  }

  async create(reservationEntity) {
    return await this.reservationDAO.create(reservationEntity);
  }

  async findByUser(reservationEntity) {
    return await this.reservationDAO.findAll({ where: { UserId: reservationEntity.UserId } });
  }

  async delete(reservationEntity) {
    return await this.reservationDAO.getOne(reservationEntity);
  }

  async findById(reservationEntity) {
    return await this.reservationDAO.findOne({
      where: { id: reservationEntity.id },
      include: [{
        model: UserDao,
      }],
    });
  }



  // async findById(UserId) {
  //   return await this.reservationDAO.findAll({
  //     include: [{
  //       model: UserDao,
  //     }],
  //     through: {model: 'UserReservation', where : {UserId}},
  //     raw: true
  //   });
  // }

  // async findById(reservationEntity) {
  //   return await this.reservationDAO.findOne({
  //     where: { id: reservationEntity.id },
  //     include: [{
  //       model: UserDao,
  //     }],
  //   });
  // }

 

  // async GetAllByUser(reservationEntity) {
  //   return await this.reservationDAO.getAll({ 
  //     through: {model: 'UserReservation', where : {UserId}}, });}

 
}

export default ReservationRepository;