import express from "express";
import { sendMessage, getAllMessages } from '../controllers/messageController.js'; 
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/all", getAllMessages);

export default router;