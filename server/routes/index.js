import express from "express";
import messageRouter from "./messageRoute";
import userRouter from "./userRoute";
import roomRouter from "./roomRoute";

const router = express.Router();

router.use("/auth", userRouter);
router.use("/message", messageRouter);
router.use("/room", roomRouter);

export default router;
