import prisma from "../../../shared/prisma";
import { Prisma, Quiz } from "@prisma/client";

const insertIntoDB = async (data: Quiz) => {
  const result = await prisma.quiz.create({
    data,
    include: {
      questions: true,
    },
  });

  return result;
};

const getallFromDB = async () => {
  const result = await prisma.quiz.findMany({
    include: {
      questions: true,
    },
  });

  return result;
};

const getSingleFromDB = async (id: string): Promise<Quiz | null> => {
  const result = await prisma.quiz.findUnique({
    where: {
      id,
    },
    include: {
      questions: true,
    },
  });

  return result;
};
const updateOneInDB = async (
  id: string,
  payload: Prisma.QuizUpdateInput
): Promise<Quiz | null> => {
  const result = await prisma.quiz.update({
    where: {
      id,
    },
    data: payload,
    include: {
      questions: true,
    },
  });

  return result;
};

const deleteOneFromDB = async (id: string): Promise<Quiz | null> => {
  const result = await prisma.quiz.delete({
    where: {
      id,
    },
    include: {
      questions: true,
    },
  });

  return result;
};

export const QuizService = {
  insertIntoDB,
  getallFromDB,
  getSingleFromDB,
  updateOneInDB,
  deleteOneFromDB,
};
