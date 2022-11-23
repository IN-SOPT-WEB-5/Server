import { Router } from "express";
import ticketsRouter from "./ticketsRouter";
import movieRouter from "./movieRouter";

const router: Router = Router();

router.use("/tickets", ticketsRouter);
router.use("/movie", movieRouter);

export default router;
