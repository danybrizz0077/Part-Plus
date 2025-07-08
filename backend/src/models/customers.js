import { Schema, model } from "mongoose";

/*
    Cliente Schema con los siguientes campos:
    {
        name: String,
        email: String,
        password: String,
        phone: String,
        age: Number,
    }
*/

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

export default model("customers", customerSchema);