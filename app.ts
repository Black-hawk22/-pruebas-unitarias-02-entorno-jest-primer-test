import express from 'express';

const app = express();
app.use(express.json());

const tareas: { id: number; titulo: string }[] = [];

app.get('/tareas', (req, res) => {
  res.status(200).json(tareas);
});

app.post('/tareas', (req, res) => {
  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({ error: 'El título es requerido' });
  }

  const nuevaTarea = { id: Date.now(), titulo };
  tareas.push(nuevaTarea);
  return res.status(201).json(nuevaTarea);
});

export default app;