import { Router } from "express";
import { movieController } from "../controller";

const router: Router = Router();

//* 박스오피스 전체 조회 - GET
router.get('/', movieController.getAllMovie);

export default router;