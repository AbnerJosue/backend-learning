import { Request,Response } from 'express'
import User from '../models/user';

const gettinProfile = async (req: Request, res: Response) => {
    try {

        const { email } = req.body;
        const user = await User.findOne({ email });
        res.status(200).json({user});

    } catch (e) {
        if (typeof e === "string") {
            throw new Error(e.toUpperCase());
        } else if (e instanceof Error) {
            res.status(400).json({ messageError: e.message })
        };
    }
};

export {
    gettinProfile
}