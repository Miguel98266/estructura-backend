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
      msg: "Error al crear item",
      error,
    });
  }
};

const read = async (req, res) => {
  try {
    const items = await Item.find();
    return res.json(items);
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar items",
      error,
    });
  }
};
const readOne = async (req, res) => {
  try {
    const {id}=req.params;
    const items = await Item.findById(id);
    return res.json(items);
  } catch (error) {
    return res.status(500).json({
      msg: "Error al busca item",
      error,
    });
  }
};
const readFilter = async (req, res) => {
  try {
    console.log(req.query)
    const items = await Item.find(req.query);
    return res.json(items);
  } catch (error) {
    return res.status(500).json({
      msg: "Error al busca item filtrado",
      error,
    });
  }
};
const update = async (req, res) => {
  try {
    const itemupdated = await Item.findByIdAndUpdate(req.params.id, req.body,{new:true});
    return res.json({msg:"Item modificado",itemupdated});
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar item",
      error,
    });
  }
};
const remove = async (req, res) => {
  try {
    const itemremoved = await Item.findByIdAndDelete(req.params.id);
    return res.json(itemremoved, { msg: "Usuario eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al borrar item",
      error,
    });
  }
};

export { create, read, readOne, readFilter, update, remove };
