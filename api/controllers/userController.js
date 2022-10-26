import Useritem from "../models/Useritem.js";

const create = async (req, res) => {
  try {
    const createuser = await Useritem.create({
      name: req.body.name,
      last_name: req.body.last_name,
      email: req.body.email,
    });
    return res.json({
      msg: "Usuario creado satisfactoriamente",
      createuser,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear usuario",
      error,
    });
  }
};
const read = async (req, res) => {
  try {
    const readUsers = await Useritem.find();
    return res.json(readUsers);
  } catch (error) {
    return res.status(500).json({
      msg: "Error al leer usuario",
      error,
    });
  }
};
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await Useritem.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({ msg: "Usuario actualizado correctamente", updatedUser });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar usuario",
      error,
    });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Useritem.findByIdAndDelete(id);
    return res.json(deletedUser, { msg: "Usuario eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al borrar usuario",
      error,
    });
  }
};

export { create, read, update, remove };
