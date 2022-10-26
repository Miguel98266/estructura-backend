import express from "express";
import itemRoutes from "./routes/itemRoutes.js";
import userRoutes from './routes/userRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';
const api = express();

api.use(express.json())

api.get("/status", (req, res) => {
  res.json({
    msg: "API en linea funcionando",
  });
});

api.use(itemRoutes,userRoutes,ticketRoutes);
export default api;
