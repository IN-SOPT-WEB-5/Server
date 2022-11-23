import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* 박스오피스 전체 조회
const getAllMovie = async() => {
    const data = await prisma.movie.findMany();
    return data;
};

const movieService = {
    getAllMovie,
};
  
export default movieService;