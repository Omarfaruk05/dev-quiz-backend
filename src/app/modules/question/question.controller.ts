import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { QuestionService } from "./question.service";
import { Request, Response } from "express";

const getQuestions = catchAsync(async (req: Request, res: Response) => {
  const { quizId } = req.params;
  const result = await QuestionService.getQuestions(quizId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Questions retrieved successfully",
    data: result,
  });
});

const getSingleQuestion = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await QuestionService.getSingleQuestion(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Question fetched successfully",
    data: result,
  });
});

const createQuestion = catchAsync(async (req: Request, res: Response) => {
  const result = await QuestionService.createQuestion(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Question created successfully",
    data: result,
  });
});

const updateSingleQuestion = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await QuestionService.updateSingleQuestion(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Question updated successfully",
    data: result,
  });
});

const deleteSingleQuestion = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await QuestionService.deleteSingleQuestion(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Question deleted successfully",
    data: result,
  });
});

export const QuestionController = {
  getQuestions,
  getSingleQuestion,
  createQuestion,
  updateSingleQuestion,
  deleteSingleQuestion,
};
