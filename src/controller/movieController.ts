import { Request, Response } from "express";
import { movieService } from "../service";

const getAllMovie = async (req: Request, res: Response) => {
  const data = await movieService.getAllMovie();

  if (!data) {
    return res
      .status(400)
      .json({ status: 400, message: "박스오피스 조회 실패" });
  }
  return res
    .status(200)
    .json({ status: 200, message: "박스오피스 조회 성공", data });
};

const movieController = {
  getAllMovie,
};

export default movieController;
