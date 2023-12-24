import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getUsers = async (): Promise<User[]> => {
  const result = await prisma.user.findMany({
    include: {
      scores: {
        include: {
          user: true,
          quiz: true,
        },
      },
    },
  });

  return result;
};

const getSingleUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      scores: {
        include: {
          quiz: {
            include: {
              questions: true,
            },
          },
        },
      },
    },
  });

  return result;
};

const updateSingleUser = async (
  id: string,
  payload: Partial<User>
): Promise<User | null> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteSingleUser = async (id: string): Promise<User | null> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });

  return result;
};

export const UserService = {
  getUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
};
