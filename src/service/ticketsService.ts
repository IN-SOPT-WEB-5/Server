import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * @api {post} /tickets 빠른 예매 하기
 *
 *
 * @apiSuccess {status} success API 상태 코드
 * @apiSuccess {Boolean} success API 호출 성공 여부
 * @apiSuccess {String} message 응답 메시지
 * @apiSuccess {Object} 유저 아이디 & 예매 번호
 */
const createTicket = async (userId: string , title: string , cinemaRegion: string , cinemaState: string, 
    date: string, time: string, amount: number) => {

  const movie = await prisma.movie.findUnique({
  where : {
    movieTitle : title
  },
 })

  /**
  * @desc 상영 정보 조회
  */
 const screening = await prisma.screening.findFirst({
  where : {
    time: time,
    date: date,
    movieId : movie?.id
  }
 })

  const ticket = await prisma.ticketing.create({
    data: {
      reservationDate: date,
      amount,
      User: {
        connect : {
          userLoginId: userId
        }
      },
      Screening : {
        connect : {
          id: screening?.id
        },
        }

      }
    });

  return ticket;
}; 

const ticketsService = {
    createTicket
};

export default ticketsService;