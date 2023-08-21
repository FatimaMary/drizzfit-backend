import express from "express";
import { postUser, getUser } from "../controllers/user.js";

const router = express.Router();

router.post("/add", postUser);
router.get("/all", getUser);

export default router;
