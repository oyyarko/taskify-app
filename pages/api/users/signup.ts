import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { runMiddleware, uploadMiddleware } from "@/lib/middleware";

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};

const JWT_SECRET = "secret";

export default async function signup(req: Request, res: Response) {
  try {
    await runMiddleware(req, res, uploadMiddleware);

    const { name, email, password } = req.body;
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
      if (req.file) {
        profilePictureBase64 = req.file.buffer.toString("base64");
      }

      const newUser = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hashedPassword,
          profilePicture: profilePictureBase64,
        },
      });

      const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      res
        .status(200)
        .json({
          message: "User created successfully",
          data: { ...newUser, token: token },
        });
    }
  } catch (err) {
    res.status(500).json({ error: "Error while signing up" });
  }
}
