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
    const readAll = await Ticket.find(req.query).populate("items user");
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
    const { id } = req.params;
    const readOneTicket = await Ticket.findById(id).populate("items user");

    if (!readOneTicket) {
      return res.status(404).json({
        msg: "Ticket no encontrado",
      });
    }
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
const sumField = async (req, res) => {
  try {
    const { id } = req.params;
    const { items } = await Ticket.findById(id).populate("items");
    // array.reduce(function(total, currentValue, currentIndex), initialValue)
    const subtotal = items.reduce((total, current) => {
      return total + current.price;
    },0);
    const tax = subtotal * 0.16;
    const total = subtotal + tax;
    const updated = await Ticket.findByIdAndUpdate(
      id,
      { subtotal, tax, total },
      { new: true }
    ).populate("items");
    return res.json({
      msg: "Ticket calculado correctamente",
      updated,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error al buscar tickets",
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

export { create, read, readOne, update, remove, sumField };
