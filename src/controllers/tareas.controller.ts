import { Request, Response } from 'express';

const tareas: { id: number; titulo: string }[] = [];

export const getTareas = (req: Request, res: Response) => {
  res.status(200).json(tareas);
};

export const createTarea = (req: Request, res: Response) => {
  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({ error: 'El título es requerido' });
  }

  const nuevaTarea = { id: Date.now(), titulo };
  tareas.push(nuevaTarea);
  return res.status(201).json(nuevaTarea);
};