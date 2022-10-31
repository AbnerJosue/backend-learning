import { Request, Response } from 'express'
import models from '../models/modules';

const creatingModuls = async (req: Request, res: Response) => {
    try {
        const {
            title,
            description,
            asignacion,
            imagen
        } = req.body;
        const userDb = new models({ title, description, asignacion, imagen });
        await userDb.save();
        res.status(200).send({ message: 'Creating SuccessFull' });

    } catch (e) {
        if (e instanceof Error) res.status(400).json({ messageError: e.message });
    }
};

const gettingModuls =  async (_: Request, res: Response) => {
    try {
        const user = await models.find({ });
        res.status(200).send({ user  });
    } catch (e) {
        if (e instanceof Error) res.status(400).json({ messageError: e.message });
    }
};

export {
    creatingModuls,
    gettingModuls
}