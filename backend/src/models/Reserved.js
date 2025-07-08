import { model, Schema, Types } from "mongoose";

/*
    Reserva Schema con los siguientes campos:
    {
        clientId: ObjectID,
        vehicle: String,
        service: String,
        status: String
    }
*/

const reservedSchema = new Schema(
  {
    clientId: {
      type: Types.ObjectId,
      required: true,
      ref: "customers", // referencia opcional a la colección de clientes
    },
    vehicle: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

export default model("Reserved", reservedSchema);