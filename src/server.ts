import express,{ Request, Response, NextFunction } from 'express';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());

app.use((err: Error,req: Request,res : Response, next: NextFunction) => {

    if( err instanceof Error){
        return res.status(500).json({
            error: err.message
        });
    }

    return res.status(500).json({
        status:'error',
        message:'Internal server error'
    });

})



app.listen(3333,() => { console.log('Server running at port 3333')});
