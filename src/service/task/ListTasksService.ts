import prismaClient from '../../prisma';

class ListTaskService { 
    async execute(){
        const tasks = await prismaClient.task.findMany({
            select: {
                id:true,
                description:true
            }
        });

        return tasks;
    }
}

export { ListTaskService };