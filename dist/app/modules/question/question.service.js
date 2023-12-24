"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const getQuestions = (quizId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.question.findMany({
        where: {
            quizId,
        },
    });
    return result;
});
const getSingleQuestion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.question.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const createQuestion = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.question.create({
        data,
    });
    return result;
});
const updateSingleQuestion = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.question.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
const deleteSingleQuestion = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.question.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.QuestionService = {
    getQuestions,
    getSingleQuestion,
    createQuestion,
    updateSingleQuestion,
    deleteSingleQuestion,
};
