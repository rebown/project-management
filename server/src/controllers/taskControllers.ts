import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getTasks = async (req: Request, res: Response): Promise<void> => {
  const { projectId } = req.params;
  try {
    const tasks = await prisma.task.findMany({
      where: {
        projectId: Number(projectId),
      },
      include: {
        author: true,
        assignee: true,
        attachments: true,
        taskAssignments: true,
      },
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving tasks' });
  }
};

const createTask = async (req: Request, res: Response): Promise<void> => {
  const {
    title,
    description,
    status,
    priority,
    tags,
    startDate,
    dueDate,
    points,
    projectId,
    authorUserId,
  } = req.body;
  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points,
        projectId,
        authorUserId,
      },
    });
    res.status(201).json(task);
  } catch (error: any) {
    res.status(500).json({ error: `Error creating task: ${error.message}` });
  }
};

const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { taskId } = req.params;
  const { status } = req.body;

  try {
    const task = await prisma.task.update({
      where: {
        id: Number(taskId),
      },
      data: {
        status,
      },
    });
    res.json(task);
  } catch (error: any) {
    res.status(500).json({ error: `Error updating task: ${error.message}` });
  }
};

export { getTasks, createTask, updateTask };
