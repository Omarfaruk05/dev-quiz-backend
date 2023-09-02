import express from "express";
import { ProfileController } from "./profile.controller";
import auth from "../../middlewares/auth";
import { ENUM_ROLE } from "../../../enums/user";

const router = express.Router();

router.get(
  "/",
  auth(ENUM_ROLE.ADMIN, ENUM_ROLE.CUSTOMER),
  ProfileController.getProfileInfo
);

export const ProfileRoutes = router;
