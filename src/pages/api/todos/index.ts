// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const todos = await prisma.todo.findMany();
    res.status(200).send({ todos: todos });
  }
};

export default examples;
