import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./api/models/User.js";
import Book from "./api/models/Book.js";

dotenv.config();

mongoose.connect(process.env.DB_URI, async () => {
  console.log("Conexion a base de datos satisfactoria");
  /**
   * CRUD basico con mongoose
   */
//   const user = await User.create({
//     address: "Direccion prueba",
//     birthday: new Date(),
//     contacts: ["Pedrito", "Jorge"],
//     email: "correo@prueba.com",
//     lastName: "Calixto",
//     name: "Miguel",
//     password: "123",
//     phone: "5561989427",
//     role: "Cliente",
//   });
//   console.log(user)
//    const users=await User.find({
//       name:"Miguel"
//     })
//     console.log(users);

    // const promiseResult= await User.updateMany({
    //   name:"Miguel",
    //   lastName:"Calixto"
    // },
    // {
    //   role:"Admin"
    // }
    // )
    // console.log(promiseResult)
    
    // const result= await User.deleteOne({
    //   name:"Miguel"
    // })
    // console.log(result)


    // CRUD BOOK
    // Todo: Ejericio 1
    // 1.-Crear modelo book
    //? 2.- create de modelo book
    
    /*const createBook=await Book.create({
        edition:1,
        editorial:"Prueba",
        isbn:"978-3-16-148410-0",
        pageNumber:345,
        title:"Backend Advanced"
    })
    console.log(createBook);
    */
    
    
    //? 3.- find de book
    /* 
    const findBook=await Book.find()
    console.log(findBook);
    */
    //? 4.- Update Book by id
    /* 
    const updateBookId=await Book.findByIdAndUpdate(
        "6350ac2ae6569b45351b6a7e",{
        edition :2
    })
    console.log(updateBookId)
    */
    // 5.- Delete by id
    /*const deleteBookid=await Book.findByIdAndDelete("6350ac2ae6569b45351b6a7e")
    console.log(deleteBookid)*/
});
