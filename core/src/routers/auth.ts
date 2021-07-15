import express, { Router } from "express";
import Auth from "@controllers/auth";

const router: Router = express.Router();

router.post("/login", Auth.login);
router.post("/refresh", Auth.refreshToken);

export default router;
