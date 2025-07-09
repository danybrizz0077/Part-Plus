import express from "express";
import * as customersController from "../controllers/customersController.js";
import { validateClient } from "../middlewares/validateClient.js";

const router = express.Router();

router
  .route("/")
  .get(customersController.getAllClients)
  .post(validateClient, customersController.createClient);

router
  .route("/:id")
  .get(customersController.getClientById)
  .put(customersController.updateClient)
  .delete(customersController.deleteClient);

export default router;