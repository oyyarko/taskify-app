import prisma from "@/lib/prisma";
import { NextFunction } from "express";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextFunction
) {
  try {
    const { title, description, authorId, priority, dueDate, taskStage } =
      req.body;

    if (!title || !authorId) {
      res.status(200).json({ message: "Title or AuthorId is required" });
    }
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        authorId,
        priority,
        taskStage,
        dueDate,
      },
    });
    res
      .status(200)
      .json({ message: "Task created successfully", data: newTask });
  } catch (err) {
    res.status(500).json({ error: "Error fetching users." });
  }
}
