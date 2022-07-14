// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { TODOType } from "../../@types";
import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST" && req.body) {
    prisma.todo
      .create({
        data: {
          title: req.body.title,
          description: req.body.description,
          badge: TODOType["TODO"],
        },
      })
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  }
};

export default examples;
