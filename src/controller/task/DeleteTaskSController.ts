import { Request,Response } from 'express';
import { DeleteTaskService } from '../../service/task/DeleteTaskService';

class DeleteTaskController{
    async handle(req:Request,res:Response){
        const id = req.query.id as string;

        const deleteTaskService = new DeleteTaskService();

        const task = deleteTaskService.execute( { id:id });

        return res.json(task);
    }
}

export { DeleteTaskController };