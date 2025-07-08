import { body, validationResult } from "express-validator";

export const validateReservation = [
  body("clientId").notEmpty().withMessage("El ID del cliente es obligatorio"),
  body("vehicle")
    .matches(/^[A-Z]{3}-\d{4}$/)
    .withMessage("El formato del vehículo es inválido (Ej: ABC-1234)"),
  body("service").notEmpty().withMessage("El tipo de servicio es obligatorio"),
  // Puedes agregar más validaciones según tus necesidades
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];