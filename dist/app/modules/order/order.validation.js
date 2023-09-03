"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const orderedBookSchema = zod_1.z.object({
    bookId: zod_1.z.string(),
    quantity: zod_1.z.number().int().positive(),
});
const createOrderZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        orderedBooks: zod_1.z.array(orderedBookSchema),
        status: zod_1.z
            .enum([...Object.values(client_1.Status)])
            .optional(),
    }),
});
