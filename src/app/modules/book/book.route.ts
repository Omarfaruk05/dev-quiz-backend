import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_ROLE } from "../../../enums/user";
import { BookController } from "./book.controller";
import validateRequest from "../../middlewares/validateRequest";
import { BookValidation } from "./book.validation";

const router = express.Router();

router.post(
  "/create-book",
  auth(ENUM_ROLE.ADMIN),
  validateRequest(BookValidation.createBookZodSchema),
  BookController.createBook
);
router.get("/:categoryId/category", BookController.getBooksByCategoryId);

router.get("/:id", BookController.getSingleBook);

router.patch(
  "/:id",
  auth(ENUM_ROLE.ADMIN),
  validateRequest(BookValidation.updateBookZodSchema),
  BookController.updateSingleBook
);
router.delete("/:id", auth(ENUM_ROLE.ADMIN), BookController.deleteSingleBook);

export const BookRoutes = router;
