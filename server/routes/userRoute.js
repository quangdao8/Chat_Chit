import { getAllUsers, login, logout, register, setavatar } from "../controllers/userController";

import express from "express";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setavatar/:id", setavatar);
router.get("/allusers/:id", getAllUsers);
router.get("/logout/:id", logout);

export default router;
