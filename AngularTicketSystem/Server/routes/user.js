import express from "express";

const router = express.Router();

import { getUsers, signin, signup } from "../controllers/user.js";

router.post("/login", signin);
router.post("/register", signup);
router.get("/all", getUsers);

export default router;