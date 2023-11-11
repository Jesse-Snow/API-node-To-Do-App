import { Router } from 'express';

import { ListTaskController } from './controller/task/ListTaskController';
import { CreateTaskController } from './controller/task/CreateTaskController';
import { DeleteTaskController } from './controller/task/DeleteTaskSController';


const router = Router();


// Task Routes
router.get('/task',new ListTaskController().handle);
router.post('/task',new CreateTaskController().handle);
router.delete('/task',new DeleteTaskController().handle);


export { router };
