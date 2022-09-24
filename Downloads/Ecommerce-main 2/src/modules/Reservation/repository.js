import { UserDao } from "../User";
import { ProductDao } from "../Product";

class ReservationRepository {
  constructor(reservationDao) {
    this.reservationDAO =reservationDao;
  }

  async findAll() {
    return this.reservationDAO.findOne({
     
  });
  }

  async create(reservationEntity) {
 const exist = await this.reservationDAO.findOne({
  where:{ userId:reservationEntity.userId,
          productId:reservationEntity.productId,
          status:false
        }
     });
     if (exist) { return}
     else{
      
        return this.reservationDAO.create(reservationEntity);
  
     }
    
  }


  async delete(id) {
    return this.reservationDAO.destroy({where:{id}});
  }

  async update(id) {
    return this.reservationDAO.update({status:true},{where:{id}});
  }


  async findByReservation(data) {
    const {userId}= data
    return this.reservationDAO.findAll({ 
      where: {userId},  
      include:{as:"products",model:ProductDao,attributes:{exclude:["id","createdAt","updatedAt"]}}
  })




}
}

export default ReservationRepository;