import { Router } from "express";
import movieRouter from "./movieRouter";
import rankRouter from "./rankRouter";

const router: Router = Router();

router.use("/movie", movieRouter);
router.use("/rank", rankRouter);

export default router;
