import { Router } from 'express';

import { ListTaskController } from './controller/task/ListTaskController';


const router = Router();


// Task Routes
router.get('/task',new ListTaskController().handle);


export { router };
