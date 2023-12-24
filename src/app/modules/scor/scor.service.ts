import { Prisma, Score } from "@prisma/client";
import prisma from "../../../shared/prisma";

const getScores = async (): Promise<Score[]> => {
  const result = await prisma.score.findMany({});

  return result;
};

const getScoreById = async (id: string): Promise<Score | null> => {
  const result = await prisma.score.findUnique({
    where: {
      id,
    },
  });

  return result;
};

const createScore = async (data: Prisma.ScoreCreateInput): Promise<Score> => {
  const result = await prisma.score.create({
    data,
  });

  return result;
};

const updateScore = async (
  id: string,
  payload: Prisma.ScoreUpdateInput
): Promise<Score | null> => {
  const result = await prisma.score.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteScore = async (id: string): Promise<Score | null> => {
  const result = await prisma.score.delete({
    where: {
      id,
    },
  });

  return result;
};

export const ScoreService = {
  getScores,
  getScoreById,
  createScore,
  updateScore,
  deleteScore,
};
