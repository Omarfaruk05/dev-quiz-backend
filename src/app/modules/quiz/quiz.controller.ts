import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { QuizService } from "./quiz.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const getQuizzes = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizService.getallFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Quizzes retrieved successfully",
    data: result,
  });
});

const getSingleQuiz = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await QuizService.getSingleFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Quiz fetched successfully",
    data: result,
  });
});

const createQuiz = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizService.insertIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Quiz created successfully",
    data: result,
  });
});

const updateSingleQuiz = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await QuizService.updateOneInDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Quiz updated successfully",
    data: result,
  });
});

const deleteSingleQuiz = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await QuizService.deleteOneFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Quiz deleted successfully",
    data: result,
  });
});

export const QuizController = {
  getQuizzes,
  getSingleQuiz,
  createQuiz,
  updateSingleQuiz,
  deleteSingleQuiz,
};
