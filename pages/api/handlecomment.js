import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export default async function handler(req, res) {
    console.log(req.body.postName);

   await prisma.comment.create( { data: {
      postName: req.body.postName,
      name: req.body.name,
      title: "req.body.title",
      idea: req.body.comment,
      }
    }) 
    res.send('ok')
  }