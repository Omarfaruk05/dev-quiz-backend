"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const scor_controller_1 = require("./scor.controller");
const scor_validation_1 = require("./scor.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(scor_validation_1.ScoreValidation.createScoreZodSchema), scor_controller_1.ScoreController.createScore);
router.get("/", scor_controller_1.ScoreController.getScores);
router.get("/:id", scor_controller_1.ScoreController.getScoreById);
router.patch("/:id", (0, auth_1.default)(user_1.ENUM_ROLE.ADMIN), (0, validateRequest_1.default)(scor_validation_1.ScoreValidation.updateScoreZodSchema), scor_controller_1.ScoreController.updateScore);
router.delete("/:id", (0, auth_1.default)(user_1.ENUM_ROLE.ADMIN), scor_controller_1.ScoreController.deleteScore);
exports.ScoreRoute = router;
