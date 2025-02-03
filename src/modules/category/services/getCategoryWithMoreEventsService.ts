import prisma from '../../../config/prisma';

class GetCategoryWithMoreEventsService {
  async execute() {
    const categories = await prisma.category.findMany({
      include: {
        events: true,
      },
      orderBy: {
        events: {
          _count: 'desc',
        },
      },
      take: 4,
    });

    return categories;
  }
}

export default new GetCategoryWithMoreEventsService();