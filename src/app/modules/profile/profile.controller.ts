import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ProfileService } from "./profile.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const getProfileInfo = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;

  const result = await ProfileService.getProfileInfo(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User info received successfully.",
    data: result,
  });
});

export const ProfileController = {
  getProfileInfo,
};
