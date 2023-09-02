import { Order, Role } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

const createOrder = async (user: any, payload: any): Promise<Order> => {
  const { id, role } = user;
  const { orderedBooks } = payload;

  const isExist = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not found.");
  }

  if (isExist.role !== "customer") {
    throw new ApiError(httpStatus.BAD_REQUEST, "Only customer can order.");
  }

  const result = await prisma.order.create({
    data: {
      userId: id,
      orderedBooks,
    },
  });

  return result;
};

export const OrderService = {
  createOrder,
};
