import { Router } from "express";
import ticketsRouter from "./ticketsRouter";

const router: Router = Router();

router.use("/tickets", ticketsRouter);

export default router;
