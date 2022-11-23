import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* 박스오피스 상위 4개 조회
const getRank = async () => {
  const data = await prisma.movie.findMany({
    orderBy: {
      advanceRate: "desc", //예매율 기준 내림차순 정렬하여 출력
    },
    take: 4,
  });
  return data;
};

const rankService = {
  getRank,
};

export default rankService;
