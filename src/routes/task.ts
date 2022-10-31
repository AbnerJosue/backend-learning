import { Request, Response } from 'express'


const gettingTask = (req: Request, res: Response) => {
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'lorem ipsum',
            date: "2019-11-17T20:39:05.211Z"
        },
        {
            _id: 2,
            name: 'Task Two ',
            description: 'lorem ipsum',
            date: "2019-11-17T20:39:05.211Z"
        }
    ])
};


const createTask = (req: Request, res: Response) => {
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'lorem ipsum',
            date: "2019-11-17T20:39:05.211Z"
        },
        {
            _id: 2,
            name: 'Task Two ',
            description: 'lorem ipsum',
            date: "2019-11-17T20:39:05.211Z"
        }
    ])
};

export { 
    gettingTask, 
    createTask
}