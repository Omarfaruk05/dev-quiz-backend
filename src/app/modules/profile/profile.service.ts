import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getProfileInfo = async (user: any): Promise<User | null> => {
  const { id } = user;
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return result;
};

export const ProfileService = {
  getProfileInfo,
};
