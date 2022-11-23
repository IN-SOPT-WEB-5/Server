import { Router } from "express";
import { rankController } from "../controller";

const router: Router = Router();

//* 박스오피스 상위 4개 조회 - GET
router.get("/", rankController.getRank);

export default router;
