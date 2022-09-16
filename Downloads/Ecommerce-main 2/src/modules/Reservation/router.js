
class ReservationRouter {
  constructor(router, auth, reservationController) {
    this.router = router;
    this.initializeRoutes(reservationController, auth);
    return this.router;
  }

  initializeRoutes(reservationController, auth) {
    this.router.route('/reservation')
  
    .post(reservationController.create,auth.authenticate)
    .delete(reservationController.delete,auth.authenticate)
      // .patch(auth.authenticate, reservationController.update)

     this.router.route('/reservationAllByUser')
    .get( auth.authenticate, reservationController.getAllByUser);
     
    
  }
}

export default ReservationRouter;
