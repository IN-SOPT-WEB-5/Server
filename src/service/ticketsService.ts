import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createTicket = async (userId: string , titleParam: string , cinemaRegion: string , cinemaState: string, 
    date: Date, time: string, amount: number) => {

  const data = await prisma.ticketing.create({
    data: {
      reservationDate: date,
      amount,
      user: {
        connect : {
          userLoginId: userId
        }
      },
      screening : {
        connect : {
          id: 1 // 임의로 id 지정 -> 중첩으로 connect ?..
        },
        }
      }
    });

  return data;
}; 

const ticketsService = {
    createTicket
};

export default ticketsService;