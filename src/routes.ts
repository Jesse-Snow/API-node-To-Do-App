import { Router } from 'express';


const router = Router();


// Task Routes
router.get('/task',(req,res) => res.json({something:'Some response'}))


export { router };
