import express from "express";
import * as itemController from "../controllers/itemController.js";

const router = express.Router();

/*
 *  Todas las rutas que queramos de item
 */

router.route("/items").post(itemController.create).get(itemController.readFilter).get(itemController.read);
router.route("/item/:id").get(itemController.readOne).put(itemController.update).delete(itemController.remove);

export default router;
