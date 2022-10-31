import { Request, Response, NextFunction } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';


const singup = async (req: Request, res: Response) => {
    try {

        const { password, email } = req.body;
        const userDb = new User({ email, password });
        await userDb.save();
        const token = jwt.sign({ _id: userDb._id }, 'secretKey');
        res.status(200).send({ token });

    } catch (e) {

        if (typeof e === "string") {
            throw new Error(e.toUpperCase());
        } else if (e instanceof Error) {
            res.status(400).json({ messageError: e.message });
            throw new Error(e.message);
        }

    }
};


const signIn = async (req: Request, res: Response) => {
    try {

        const { password, email } = req.body;
        const user = await User.findOne({ email });
        let token;
        if (!user) return res.status(401).json({ message: "The email doesn't exists verify again" });
        if (user.password !== password) return res.status(401).json({ message: 'Wrong Password' });
        token = jwt.sign({ _id: user._id }, 'secretKey');
        res.status(200).json({ token });

    } catch (e) {
        if (typeof e === "string") {
            throw new Error(e.toUpperCase());
        } else if (e instanceof Error) {
            res.status(400).json({ messageError: e.message })
        };
    }
};




const verifyToken = (req: any, res: any, next: any) => {
    console.log(req.headers)
    try {
        if (!req.headers.authorization) return res.status(401).json({ message: 'Unthorize Request' });
        const token = req.headers.authorization.split(' ')[1];
        if (!token) return res.status(401).json({ message: 'Unathorize Request' });

        const payload: any = jwt.verify(token, 'secretKey');
        req.userId = payload._id;
        next()
    } catch (e) {
        if (typeof e === "string") {
            throw new Error(e.toUpperCase());
        } else if (e instanceof Error) {
            res.status(400).json({ messageError: e.message })
        };
    }
}



const profile  = (req: any, res: Response) => {
    res.send(req.userId)
};


export { 
    signIn,
    singup, 
    profile, 
    verifyToken
};

