import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * @api {get} /curation 큐레이션 작품 전체 조회
 *
 *
 * @apiSuccess {status} success API 상태 코드
 * @apiSuccess {Boolean} success API 호출 성공 여부
 * @apiSuccess {String} message 응답 메시지
 * @apiSuccess {Object} 큐레이션 작품 데이터
 */
const getAllCuration = async () => {
    const data = await prisma.curationMedia.findMany();
    return data;
  };

  const curationService = {
    getAllCuration
  };
  
  export default curationService;