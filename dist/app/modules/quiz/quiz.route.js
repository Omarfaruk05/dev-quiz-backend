"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const quiz_controller_1 = require("./quiz.controller");
const quiz_validation_1 = require("./quiz.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = express_1.default.Router();
router.post("/", (0, auth_1.default)(user_1.ENUM_ROLE.ADMIN), (0, validateRequest_1.default)(quiz_validation_1.QuizValidation.createQuizZodSchema), quiz_controller_1.QuizController.createQuiz);
router.get("/", quiz_controller_1.QuizController.getQuizzes);
router.get("/:id", quiz_controller_1.QuizController.getSingleQuiz);
router.patch("/:id", (0, auth_1.default)(user_1.ENUM_ROLE.ADMIN), (0, validateRequest_1.default)(quiz_validation_1.QuizValidation.updateQuizZodSchema), quiz_controller_1.QuizController.updateSingleQuiz);
router.delete("/:id", (0, auth_1.default)(user_1.ENUM_ROLE.ADMIN), quiz_controller_1.QuizController.deleteSingleQuiz);
exports.QuizRoute = router;
