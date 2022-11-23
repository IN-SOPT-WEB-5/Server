import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* 박스오피스 전체 조회
const getAllMovie = async () => {
  const data = await prisma.movie.findMany({
    orderBy: {
      advanceRate: "desc", //예매율 기준 내림차순 정렬하여 출력
    },
  });
  return data;
};

const movieService = {
  getAllMovie,
};

export default movieService;
