import ReservationEntity from './entity';
import { ApiError } from '../../helpers/error';
import ProductEntity from '../Product/entity';

class ReservationService {
  constructor(reservationRepository) {
    this.reservationRepo = reservationRepository;
  }

  async getAll() {
    const reservation = await this.reservationRepo.findAll();
    return reservation.map((reservation) => new ReservationEntity(reservation));
  }
  async getAllByUser(UserId) {
    
    const reservation = await this.reservationRepo.findById(UserId);
    return reservation.map((reservation) => new ReservationEntity(reservation));
  
  }
  
 

  async create(reservationData) {
    const reservationEntity = new ReservationEntity(reservationData);
     if (!reservationEntity) {  throw new ApiError(400,"reservation existante", "Cette réservation existe");}
   const newReservation = await this.reservationRepo.create(reservationEntity);
    return new ReservationEntity(newReservation);
}

   
  async getOne(reservationData) {
    const reservationEntity = new ReservationEntity(reservationData);
    const reservation = await this.reservationRepo.findById(reservationEntity);
    return reservation;
  }

  async update(reservationData) {
    const reservationEntity = new ReservationEntity(reservationData);
    const reservationFound = await this.reservationRepo.findById(reservationEntity);
    const reservation = reservationFound.update(reservationEntity);
    return reservation;
  }

  async delete(reservationData) {
    const reservationEntity = new ReservationEntity(reservationData);
    const reservationFound = await this.reservationRepo.findById(reservationEntity);
    const reservationDeleted = reservationFound.delete(reservationFound);
    return reservationDeleted;
  }


}

export default ReservationService;
