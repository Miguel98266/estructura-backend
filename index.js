import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./api/models/User.js";

dotenv.config();

mongoose.connect(process.env.DB_URI, async () => {
  console.log("Conexion a base de datos satisfactoria");
  /**
   * CRUD basico con mongoose
   */
  const user = await User.create({
    address: "Direccion prueba",
    birthday: new Date(),
    contacts: ["Pedrito", "Jorge"],
    email: "correo@prueba.com",
    lastName: "Calixto",
    name: "Miguel",
    password: "123",
    phone: "5561989427",
    role: "Cliente",
  });
  console.log(user);
  //   User.find({
  //     name:"Miguel"
  //   })

  //   User.updateMany({
  //     name:"Miguel",
  //     lastName:"Calixto"
  //   },
  //   {
  //     role:"Admin"
  //   }
  //   )

  //   User.deleteOne({
  //     name:"Miguel"
  //   })
});
