import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { OrderService } from "./order.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;

  const result = await OrderService.createOrder(user, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order created successfully",
    data: result,
  });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;

  const result = await OrderService.getAllOrders(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Orders retrieved successfully",
    data: result,
  });
});

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const { orderId } = req.params;

  const result = await OrderService.getSingleOrder(user, orderId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order fetched successfully",
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
};
