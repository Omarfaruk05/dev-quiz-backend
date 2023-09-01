import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_ROLE } from "../../../enums/user";
import { CategoryController } from "./category.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryValidation } from "./category.validation";

const router = express.Router();

router.post(
  "/create-category",
  auth(ENUM_ROLE.ADMIN),
  validateRequest(CategoryValidation.createCategoryZodSchema),
  CategoryController.createCategory
);
router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getSingleCategory);
router.patch(
  "/:id",
  auth(ENUM_ROLE.ADMIN),
  validateRequest(CategoryValidation.updateCategoryZodSchema),
  CategoryController.updateSingleCategory
);
router.delete(
  "/:id",
  auth(ENUM_ROLE.ADMIN),
  CategoryController.deleteSingleCategory
);

export const CategoryRoutes = router;
