import express from "express";
import { postUser, getUser, getUserById } from "../controllers/customer.js";

const router = express.Router();

router.post("/add", postUser);
router.get("/all", getUser);
router.get("/single/:userId", getUserById);

export default router;
