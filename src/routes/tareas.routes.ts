import { Router } from 'express';
import { getTareas, createTarea } from '../controllers/tareas.controller';

const router = Router();

router.get('/tareas', getTareas);
router.post('/tareas', createTarea);

export default router;