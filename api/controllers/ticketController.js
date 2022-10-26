import Ticket from "../models/Ticket.js";

const create = async (req, res) => {
  try {
    const createTicket = await Ticket.create(req.body);
    return res.json({
      msg: "Ticket creado satisfactoriamente",
      createTicket,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al crear ticket",
      error,
    });
  }
};
const read = async (req, res) => {
  try {
    const readAll = await Ticket.find(req.query).populate("user");
    return res.json({
      msg: "Tickets encontrados satisfactoriamente",
      readAll,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar tickets",
      error,
    });
  }
};
const readOne = async (req, res) => {
  try {
    const {id}=req.params;
    const readOneTicket = await Ticket.findById(id).populate('user');
    return res.json({
      msg: "Ticket encontrado",
      readOneTicket,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al encontrar ticket",
      error,
    });
  }
};
const update = async (req, res) => {
  try {
    const { id } = req.params.id;
    const update = await Ticket.findByIdAndUpdate(id, req.body, { new: true });
    return res.json({
      msg: "Ticket actualizado",
      update,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al actualizar ticket",
      error,
    });
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params.id;
    const removed = await Ticket.findByIdAndDelete(id);
    return res.json({
      msg: "Ticket eliminado",
      removed,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al borrar ticket",
      error,
    });
  }
};

export { create, read, readOne, update, remove };
