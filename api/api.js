import express from "express";
import itemRoutes from "./routes/itemRoutes.js";
const api = express();

api.use(express.json())

api.get("/status", (req, res) => {
  res.json({
    msg: "API en linea funcionando",
  });
});

api.use(itemRoutes);
export default api;
