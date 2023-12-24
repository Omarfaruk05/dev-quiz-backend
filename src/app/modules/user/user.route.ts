import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_ROLE } from "../../../enums/user";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", auth(ENUM_ROLE.ADMIN), UserController.getUsers);
router.get("/:id", UserController.getSingleUser);
router.patch("/:id", UserController.updateSingleUser);
router.delete("/:id", auth(ENUM_ROLE.ADMIN), UserController.deleteSingleUser);

export const UserRoutes = router;
