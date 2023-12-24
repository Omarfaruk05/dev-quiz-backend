import { Prisma, Question } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getQuestions = async (quizId: string): Promise<Question[]> => {
  const result = await prisma.question.findMany({
    where: {
      quizId,
    },
  });

  return result;
};

const getSingleQuestion = async (id: string): Promise<Question | null> => {
  const result = await prisma.question.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const createQuestion = async (data: Question): Promise<Question> => {
  const result = await prisma.question.create({
    data,
  });

  return result;
};

const updateSingleQuestion = async (
  id: string,
  payload: Prisma.QuestionUpdateInput
): Promise<Question | null> => {
  const result = await prisma.question.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteSingleQuestion = async (id: string): Promise<Question | null> => {
  const result = await prisma.question.delete({
    where: {
      id,
    },
  });

  return result;
};

export const QuestionService = {
  getQuestions,
  getSingleQuestion,
  createQuestion,
  updateSingleQuestion,
  deleteSingleQuestion,
};
