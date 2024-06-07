import prisma from "@/lib/prisma";
import { NextFunction } from "express";
import { NextApiRequest, NextApiResponse } from "next";

export default async function fetchUsers(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextFunction
) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ message: "Fetched successfully", data: users });
  } catch (err) {
    res.status(500).json({ error: "Error fetching users." });
  }
}
