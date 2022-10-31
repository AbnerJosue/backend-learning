import { Request, Response } from 'express'
import task from '../models/task'
import newTasks from '../models/new-tasks';
const gettingTask = async (req: Request, res: Response) => {
    try {
        const tasks = await task.find({});
        res.status(200).send({ tasks });
    } catch (e) {
        if (e instanceof Error) res.status(400).json({ messageError: e.message });
    }
};


const createTask = async (req: Request, res: Response) => {
    try {
        const {
            firstName,
            lastName,
            clase,
            note
        } = req.body;
        const userDb = new task({
            firstName,
            lastName,
            clase,
            note
        });
        await userDb.save();
        res.status(200).send({ message: 'Creating SuccessFull' });
    } catch (e) {
        if (e instanceof Error) res.status(400).json({ messageError: e.message });
    }
};



const gettingnewTask = async (req: Request, res: Response) => {
    try {
        const tasks = await newTasks.find({});
        res.status(200).send({ tasks });
    } catch (e) {
        if (e instanceof Error) res.status(400).json({ messageError: e.message });
    }
};


const createNewTask = async (req: Request, res: Response) => {
    try {
        const {
            title,
            description,
            note,
            module,
            asignacion
        } = req.body;
        const userDb = new newTasks({
            title,
            description,
            note,
            module,
            asignacion
        });
        await userDb.save();
        res.status(200).send({ message: 'Creating SuccessFull' });
    } catch (e) {
        if (e instanceof Error) res.status(400).json({ messageError: e.message });
    }
};

export {
    gettingTask,
    createTask,
    gettingnewTask,
    createNewTask
}