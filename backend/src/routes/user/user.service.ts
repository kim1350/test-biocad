import prisma from '../../prisma/client';

export const getUsers = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      photo: true,
    },
  });
};
