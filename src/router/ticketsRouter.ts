import { Router } from "express";
import { ticketsController } from "../controller";

const router: Router = Router();

//* 예매 내역 생성
router.post("/", ticketsController.createTicket);

export default router;