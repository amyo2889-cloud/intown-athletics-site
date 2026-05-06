import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { PrismaClient } from "@prisma/client";
import { RegistrationSchema } from "../types";

const prisma = new PrismaClient();
const registrationsRouter = new Hono();

registrationsRouter.post(
  "/",
  zValidator("json", RegistrationSchema),
  async (c) => {
    const data = c.req.valid("json");
    const registration = await prisma.registration.create({ data });
    return c.json(
      { data: { id: registration.id, message: "Registration received! We'll be in touch soon." } },
      201
    );
  }
);

export { registrationsRouter };
