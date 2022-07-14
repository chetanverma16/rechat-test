// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST" && req.body.id) {
    const todo = await prisma.todo.findUnique({ where: { id: req.body.id } });
    res.status(200).send(todo);
  }
};

export default examples;
