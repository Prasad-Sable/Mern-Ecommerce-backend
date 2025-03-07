import { Router } from "express";
import { allOrders, deleteOrder, getSingleOrder, myOrders, newOrder, processOrder } from "../controller/order.controller.js";
import adminOnly from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/new").post(newOrder)
router.route("/my").get(myOrders)
router.route("/all").get(adminOnly,allOrders)
router.route("/:id").get(getSingleOrder).put(adminOnly,processOrder).delete(adminOnly,deleteOrder)


export default router