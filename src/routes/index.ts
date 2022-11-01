import { Router } from 'express';
import { verifyToken, profile, signIn, singup } from './auth'
import { gettingTask, createTask, gettingnewTask, createNewTask, deleteTask } from './task';
import { creatingModuls, gettingModuls } from './moduls';


const router = Router();

router.post('/signup', singup);
router.post('/signIn', signIn);
router.post('/creatingModuls', creatingModuls);
router.post('/creating/task', createTask);
router.post('/new-task', createNewTask);

router.get('/gettingModuls', gettingModuls);
router.get('/new/get-task', gettingnewTask);
router.get('/getTask', verifyToken, gettingTask);
router.get('/create-task', verifyToken, createTask);
router.get('/profile', verifyToken, profile);

router.delete('/delete-task', deleteTask);
export default router;

