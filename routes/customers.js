import express from "express";
import { postCustomer, getCustomer } from "../controllers/customers.js";

const router = express.Router();

router.post("/add", postCustomer);
router.get("/all", getCustomer);

export default router;
