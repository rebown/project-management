import { Router } from 'express';
import {
  getTasks,
  createTask,
  updateTask,
} from '../controllers/taskControllers';

const router = Router();

router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:taskId/status', updateTask);

export default router;
