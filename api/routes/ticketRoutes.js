import express from "express";
import * as ticketRoutes from "../controllers/ticketController.js";


const router = express.Router();

/*
 *  Todas las rutas que queramos de item
 */

router.route("/tickets").post(ticketRoutes.create).get(ticketRoutes.read)
router.route("/ticket/:id").get(ticketRoutes.readOne).put(ticketRoutes.update).delete(ticketRoutes.remove)
router.route("/ticket/:id/calculate").get(ticketRoutes.sumField)

export default router;
