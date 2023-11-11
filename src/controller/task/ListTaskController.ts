import { Request,Response } from 'express';
import { ListTaskService } from '../../service/task/ListTasksService';

class ListTaskController{
    async handle(req: Request, res: Response){
        const listTaskService = new ListTaskService();

        const task = await listTaskService.execute();

        return res.json(task);
    }
}

export { ListTaskController };