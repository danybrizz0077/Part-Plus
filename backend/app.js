import express from "express";
import clientRoutes from "./src/routes/customers.js";
import reservationRoutes from "./src/routes/reserved.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
 
const app = express();
app.use(express.json());
 
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.resolve("./Documento.json"), "utf-8")
);
 
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
 
app.use(express.json());
app.use("/api/clients", clientRoutes);
app.use("/api/reservations", reservationRoutes);
 
export default app;
 