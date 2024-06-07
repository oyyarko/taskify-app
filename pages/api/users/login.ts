import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextFunction } from "express";
import { NextApiRequest, NextApiResponse } from "next";

const JWT_SECRET = "secret";

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextFunction
) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Please provide email, password" });
    }
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(400).json({ message: "Invalid email" });
    } else {
      const isPasswordValid = await bcrypt.compare(password, user?.password);

      if (!isPasswordValid) {
        res.status(400).json({ message: "Please provide correct password" });
      }

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({
        message: "Logged in successfully",
        data: { ...user, token: token },
      });
    }
  } catch (err) {
    res.status(500).json({ error: "Error while logging in" });
  }
}
