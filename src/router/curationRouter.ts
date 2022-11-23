import { Router } from "express";
import { curationController } from "../controller";

const router: Router = Router();

//* 전체 큐레이션 작품 조회
router.get("/", curationController.getAllCuration);

export default router;