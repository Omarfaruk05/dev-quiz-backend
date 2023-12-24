import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { ScoreService } from "./scor.service";

const getScores = catchAsync(async (_req: Request, res: Response) => {
  const result = await ScoreService.getScores();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Scores retrieved successfully",
    data: result,
  });
});

const getScoreById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ScoreService.getScoreById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Score fetched successfully",
    data: result,
  });
});

const createScore = catchAsync(async (req: Request, res: Response) => {
  const result = await ScoreService.createScore(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Score created successfully",
    data: result,
  });
});

const updateScore = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ScoreService.updateScore(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Score updated successfully",
    data: result,
  });
});

const deleteScore = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await ScoreService.deleteScore(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Score deleted successfully",
    data: result,
  });
});

export const ScoreController = {
  getScores,
  getScoreById,
  createScore,
  updateScore,
  deleteScore,
};
