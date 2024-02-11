import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { ScoreService } from "./scor.service";

//get all scors
const getScores = catchAsync(async (_req: Request, res: Response) => {
  const result = await ScoreService.getScores();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Scores retrieved successfully",
    data: result,
  });
});
//get single score
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

// create score
const createScore = catchAsync(async (req: Request, res: Response) => {
  const result = await ScoreService.createScore(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Score created successfully",
    data: result,
  });
});

//update score data
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

//delete score data
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
