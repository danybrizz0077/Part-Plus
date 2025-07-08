import { body, validationResult } from "express-validator";

export const validateClient = [
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
  body("email").isEmail().withMessage("Email inválido"),
  body("password").notEmpty().withMessage("La contraseña es obligatoria"),
  body("phone").notEmpty().withMessage("El teléfono es obligatorio"),
  body("age").isInt({ min: 0 }).withMessage("La edad debe ser válida"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];