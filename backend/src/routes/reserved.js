import express from "express";
import reservedController from "../controllers/reservedController.js";
import { validateReservation } from "../middlewares/validateReservation.js";

const router = express.Router();

router
  .route("/")
  .get(reservedController.getReservations)
  .post(validateReservation, reservedController.createReservation);

router
  .route("/:id")
  .get(reservedController.getReservationById)
  .put(reservedController.updateReservation)
  .delete(reservedController.deleteReservation);

export default router;