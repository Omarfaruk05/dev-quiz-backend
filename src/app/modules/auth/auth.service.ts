import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";
import bcrypt from "bcrypt";
import { ILoginUser, ILoginUserResponse } from "./auth.interface";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { jwtHelpers } from "../../../helpers/jwtHalpers";
import config from "../../../config";
import { Secret } from "jsonwebtoken";

const createUser = async (data: User): Promise<User> => {
  //hasing password
  data.password = await bcrypt.hash(
    data.password,
    Number(config.bcrypt_sald_round)
  );

  const result = await prisma.user.create({
    data,
  });

  return result;
};

//login user service
const loginUser = async (
  loginData: ILoginUser
): Promise<ILoginUserResponse> => {
  const { email, password } = loginData;

  const isUserExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist.");
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    isUserExist.password
  );

  if (isUserExist.password && !isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password is incorrect.");
  }

  // generating access token
  const accessToken = jwtHelpers.createToken(
    { id: isUserExist?.id, email: isUserExist?.email, role: isUserExist?.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  // generating refresh token
  const refreshToken = jwtHelpers.createToken(
    { email: isUserExist?.email, role: isUserExist.role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};
export const AuthService = {
  createUser,
  loginUser,
};
