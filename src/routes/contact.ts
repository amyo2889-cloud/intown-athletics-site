import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { PrismaClient } from "@prisma/client";
import { ContactSchema } from "../types";

const prisma = new PrismaClient();
const contactRouter = new Hono();

contactRouter.post(
  "/",
  zValidator("json", ContactSchema),
  async (c) => {
    const data = c.req.valid("json");
    const contactMessage = await prisma.contactMessage.create({ data });
    return c.json(
      { data: { id: contactMessage.id, message: "Message received! We'll respond within 24 hours." } },
      201
    );
  }
);

export { contactRouter };
