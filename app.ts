import express from 'express';
import tareasRouter from './src/routes/tareas.routes';

const app = express();
app.use(express.json());
app.use(tareasRouter);

export default app;