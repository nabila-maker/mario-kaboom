class ReservationController {
    constructor(reservationService) {
      this.reservationService = reservationService;
    }
  
    getAll = async ({ res, next }) => {
      try {
        const reservations = await this.reservationService.getAll();
        res.status(200).json(reservations);
      } catch (err) {
        next(err);
      }
    };
  
    create = async (req, res, next) => {
      try {
        const reservationCreate = await this.reservationService.create({ ...req.body });
        res.status(201).json(reservationCreate);
      } catch (err) {
        next(err);
      }
    };
  
    getOne = async (req, res, next) => {
      try {
        const service = await this.reservationService.getOne({ ...req.body });
  
        res.status(201).json(service);
      } catch (err) {
        next(err);
      }
    };
  
    getAllByUser = async (req, res, next) => {
      try {
        console.log(req.body)
        const { UserId } = req.body;
        
        const service = await this.reservationService.getAllByUser(UserId);
        res.status(201).json(service);
      } catch (err) {
        next(err);
      }

      
    
    
    };

    findById = async (req, res, next) => {
      try {
        console.log(req.body)
        const { UserId } = req.body;
        
        const service = await this.reservationService.getAllByUser(UserId);
        res.status(201).json(service);
      } catch (err) {
        next(err);
      }

      
    
    
    };
  
  
  }
  
  export default ReservationController;