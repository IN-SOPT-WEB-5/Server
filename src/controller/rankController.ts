import { Request, Response } from "express";
import { rankService } from "../service";

const getRank = async (req: Request, res: Response) => {
  const data = await rankService.getRank();

  if (!data) {
    return res
      .status(400)
      .json({ status: 400, message: "랜딩 페이지 순위 조회 성공" });
  }
  return res
    .status(200)
    .json({ status: 200, message: "랜딩 페이지 순위 조회 실패", data });
};

const rankController = {
    getRank,
};

export default rankController;
