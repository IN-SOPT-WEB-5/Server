import { Router } from "express";
import ticketsRouter from "./ticketsRouter";
import curationRouter from "./curationRouter"

const router: Router = Router();

router.use("/tickets", ticketsRouter);
router.use("/curation", curationRouter);

export default router;
