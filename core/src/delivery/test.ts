import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req, res) => {
    res.send('just test ^-^');
});
router.post("/", (req, res) => {
    res.send('post is ok');
})


export default router;