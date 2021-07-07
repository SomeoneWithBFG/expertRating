import express, { Router } from "express";
import Users from "../controllers/users"

const router: Router = express.Router();

router.get("/", Users.getUserList);
router.get("/by-id", Users.getUserByID);
router.post("/", Users.createUser)
router.patch("/", Users.updateUser)
router.delete("/", Users.deleteUser)

export default router;
