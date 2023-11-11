import prismaClient from '../../prisma';

interface TaskRequest { 
    description: string;
}

class CreateTaskService{
    async execute( {  description } : TaskRequest){
        
        if( description === ''){
            throw new Error("Descrição está vazia");
        }

        const task = await prismaClient.task.create({
            data: { 
                description: description
            },
            select: { 
                id: true,
                description: true
            }
        });

        return task;
    }
}

export { CreateTaskService };