"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const question_controller_1 = require("./question.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const question_validation_1 = require("./question.validation");
const router = express_1.default.Router();
router.get("/", question_controller_1.QuestionController.getQuestions);
router.get("/:id", question_controller_1.QuestionController.getSingleQuestion);
router.post("/", (0, auth_1.default)(user_1.ENUM_ROLE.ADMIN), (0, validateRequest_1.default)(question_validation_1.QuestionValidation.createQuestionZodSchema), question_controller_1.QuestionController.createQuestion);
router.patch("/:id", (0, auth_1.default)(user_1.ENUM_ROLE.ADMIN), (0, validateRequest_1.default)(question_validation_1.QuestionValidation.updateQuestionZodSchema), question_controller_1.QuestionController.updateSingleQuestion);
router.delete("/:id", (0, auth_1.default)(user_1.ENUM_ROLE.ADMIN), question_controller_1.QuestionController.deleteSingleQuestion);
exports.QuestionRoute = router;
