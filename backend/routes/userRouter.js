import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { registerUser, loginUser, getUserDetails } from "../controllers/userController.js";

const router = express.Router();

// Patienten- und Admin-Registrierung und Login
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// Authentifizierte Routen
router.get("/some-route", isAuthenticated("Patient"), getUserDetails);

export default router;
