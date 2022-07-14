// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST" && req.body.id) {
    const todo = await prisma.todo.findUnique({ where: { id: req.body.id } });
    res.status(200).send(todo);
  }
  if (req.method === "PUT" && req.body) {
    if (req.body.badge === "Deployed") {
      prisma.todo
        .delete({ where: { id: req.body.id } })
        .then((data) => res.status(200).send(data))
        .catch((err) => console.log(err));
    } else {
      prisma.todo
        .update({
          where: { id: req.body.id },
          data: {
            title: req.body.title,
            description: req.body.description,
            badge: req.body.badge,
          },
        })
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => res.status(400).send(err));
    }
  }
};

export default examples;
