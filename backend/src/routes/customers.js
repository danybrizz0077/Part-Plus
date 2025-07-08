


import express from "express";
import customersController from "../controllers/customersController.js";
import { validateClient } from "../middlewares/validateClient.js";

const router = express.Router();

router
  .route("/")
  .get(customersController.getcustomers)
  .post(validateClient, customersController.createcustomers); // <--- AQUÍ VA EL MIDDLEWARE

router
  .route("/:id")
  .get(customersController.getcustomerById)
  .put(customersController.updatecustomers)
  .delete(customersController.deletecustomers);

export default router;