import { Router } from 'express';
import { verifyToken, profile, signIn, singup } from './auth'
import { gettingTask,createTask } from './task';
import { creatingModuls ,gettingModuls} from './moduls';
import { } from './profile';


const router = Router();

router.post('/signup', singup);
router.post('/signIn', signIn);
router.post('/creatingModuls', creatingModuls);


router.get('/gettingModuls', gettingModuls);
router.get('/getTask',verifyToken, gettingTask);
router.get('/create-task', verifyToken, createTask);
router.get('/profile', verifyToken, profile);


export default router;

