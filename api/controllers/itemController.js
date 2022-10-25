// req.body
// req.query
// req.params
// req.headers
import Item from "../models/Item.js";

const create = async (req, res) => {
    // Poner a prueba funciones que puedan fallar
    
    try {   
        const item = await Item.create({
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
          });
          return res.json({
            msg: "Item creado satisfactoriamente",
            item,
          });
    } catch (error) {
        // Que hacer con ese error
        return res.status(500).json({
            msg:'Error al crear item',
            error,
        })
    }
  
};

const read = () => {};
const update = () => {};
const remove = () => {};

export { create, read, update, remove };
