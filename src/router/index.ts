import { Router } from "express";
import ticketsRouter from "./ticketsRouter";
import curationRouter from "./curationRouter"
import movieRouter from "./movieRouter";

const router: Router = Router();

router.use("/tickets", ticketsRouter);
router.use("/curation", curationRouter);
router.use("/movie", movieRouter);

export default router;
