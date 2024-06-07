import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";

export default async function handler(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;
    const { file } = req;
    if (!email || !password || !name) {
      res
        .status(400)
        .json({ message: "Please provide email, password and name" });
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      res.status(400).json({ message: "Email exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      let profilePictureBase64: string | undefined = undefined;
      if (file) {
        profilePictureBase64 = file.buffer.toString("base64");
      }

      const newUser = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hashedPassword,
          profilePicture: profilePictureBase64,
        },
      });
      
      res
        .status(200)
        .json({ message: "User created successfully", data: newUser });
    }
  } catch (err) {
    res.status(500).json({ error: "Error while signing up" });
  }
}
