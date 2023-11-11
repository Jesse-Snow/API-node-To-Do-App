import { Request, Response } from 'express';
import { CreateTaskService } from '../../service/task/CreateTaskService'; 

class CreateTaskController{
    async handle(req: Request,res: Response){

        const { description } = req.body;

        const createTaskService = new CreateTaskService();

        const task = await createTaskService.execute( { description:description });

        return res.json(task);
    }
}

export { CreateTaskController };