import express from "express";
import * as messageControllers from "./controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/users", protectRoute, messageControllers.getUsersForSidebar);
router.get("/:id", protectRoute, messageControllers.getMessages);

router.post("/send/:id", protectRoute, messageControllers.sendMessage);
export default router;
