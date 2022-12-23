import express from "express";
import { createRegister } from "../controllers/register.js";

const router = express.Router();

router.post("/", (req, res) => {
 createRegister(req, res);
});

export default router;
