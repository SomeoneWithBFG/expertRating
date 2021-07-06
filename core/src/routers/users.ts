import express, { Router } from "express";
import Users from "../usecases/users"

const router: Router = express.Router();

router.get("/", Users.getList);
router.get("/:id", Users.getByID);
router.post("/", Users.create)
router.patch("/", Users.update)
router.delete("/", Users.delete)

export default router;
