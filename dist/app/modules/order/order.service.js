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
exports.OrderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const createOrder = (user, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, role } = user;
    const { orderedBooks } = payload;
    const isExist = yield prisma_1.default.user.findFirst({
        where: {
            id,
        },
    });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User does not found.");
    }
    if (isExist.role !== "customer") {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Only customer can order.");
    }
    const result = yield prisma_1.default.order.create({
        data: {
            userId: id,
            orderedBooks,
        },
    });
    return result;
});
const getAllOrders = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, role } = user;
    const isExist = yield prisma_1.default.user.findFirst({
        where: {
            id,
        },
    });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User does not found.");
    }
    if (role === "admin") {
        const result = yield prisma_1.default.order.findMany({});
        return result;
    }
    if (role === "customer") {
        const result = yield prisma_1.default.order.findMany({
            where: {
                userId: id,
            },
        });
        return result;
    }
});
const getSingleOrder = (user, orderId) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, role } = user;
    const isExist = yield prisma_1.default.user.findFirst({
        where: {
            id,
        },
    });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User does not found.");
    }
    if (role === "admin") {
        const result = yield prisma_1.default.order.findUnique({
            where: {
                id: orderId,
            },
        });
        return result;
    }
    if (role === "customer") {
        const result = yield prisma_1.default.order.findUnique({
            where: {
                id: orderId,
                userId: id,
            },
        });
        return result;
    }
});
exports.OrderService = {
    createOrder,
    getAllOrders,
    getSingleOrder,
};
