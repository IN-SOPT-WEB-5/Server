import { Request, Response } from "express";
import { ticketsService } from "../service";

const createTicket = async (req: Request, res: Response) => {
    
    const { userId , title, cinemaRegion, cinemaState, date, time, amount } = req.body; //비구조 할당


    // 유효하지 않은 데이터 검사 어케 하지 ?

    // 데이터가 다 넘어오지 않았을 떄
    if (!userId || !title || !cinemaRegion || !cinemaState || !date || !time || !amount) { 
        return res.status(400).json({ status: 400, message: "데이터 형식이 올바르지 않습니다." });
      }
    
    // 디비 통신하도록 넘겨주기 (controller의 역할)
    const data = await ticketsService.createTicket(userId , title, cinemaRegion, cinemaState, date, time, amount);
        
    if (!data) {
        return res.status(400).json({ status: 400, message: "유저 생성 실패" });
    }
        
    return res.status(200).json({ status: 200, message: "유저 생성 성공", data });
};

const ticketsController = {
    createTicket
};

export default ticketsController;
