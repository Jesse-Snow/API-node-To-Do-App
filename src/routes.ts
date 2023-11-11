import { Router } from 'express';

import { ListTaskController } from './controller/task/ListTaskController';
import { CreateTaskController } from './controller/task/CreateTaskController';


const router = Router();


// Task Routes
router.get('/task',new ListTaskController().handle);
router.post('/task',new CreateTaskController().handle);


export { router };
