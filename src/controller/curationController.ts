import { Request, Response } from "express";
import { curationService } from "../service";

const getAllCuration = async (req: Request, res: Response) => {

    // 디비 통신하도록 넘겨주기 (controller의 역할)
    const data = await curationService.getAllCuration();
        
    if (!data) {
        return res.status(400).json({ status: 400, message: "큐레이션 작품 조회 실패" });
    }
        
    return res.status(200).json({ status: 200, message: "큐레이션 조회 성공", data });
};

const curationController = {
    getAllCuration
};

export default curationController;