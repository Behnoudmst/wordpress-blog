import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
   const deletion = await prisma.comment.delete({
        where: {
          id : req.body.id,
        }
      })

  if (deletion) {res.send("ok")};
}