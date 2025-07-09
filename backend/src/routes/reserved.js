import express from "express";
import * as reservedController from "../controllers/reservedController.js";
// import { validateReservation } from "../middlewares/validateReservation.js"; // si tienes validación, descomenta esto

const router = express.Router();

router
  .route("/")
  .get(reservedController.getReserveds)
  .post(reservedController.createReserved); // si tienes middleware de validación, agrégalo aquí

router
  .route("/:id")
  .get(reservedController.getReservedById)
  .put(reservedController.updateReserved)
  .delete(reservedController.deleteReserved);

router.get("/vehicle/:vehicle", reservedController.getReservedsByVehicle);
router.get("/client/:clientId", reservedController.getReservedsByClient);

export default router;;