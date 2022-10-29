import { Router, Request, Response, NextFunction } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';
const router = Router();

router.post('/signup', async (req: Request, res: Response) => {
    try {

        const { password, email } = req.body;
        const userDb = new User({ email, password });
        await userDb.save();
        const token = jwt.sign({_id: userDb._id},'secretKey');
        res.status(200).send({token});

    } catch (e) {

        if (typeof e === "string") {
            throw new Error(e.toUpperCase());
        } else if (e instanceof Error) {
            res.status(400).json({messageError: e.message });
            throw new Error(e.message);
        }

    }
});


router.post('/signIn', async (req: Request, res: Response) => {
    try {
        
        const { password, email } = req.body;
        const user = await User.findOne({email});
        let token;
        if(!user) return  res.status(401).json({message: "The email doesn't exists verify again"});
        if(user.password !== password) return res.status(401).json({message:'Wrong Password'});
        token = jwt.sign({_id: user._id} , 'secretKey');
        res.status(200).json({token});

    } catch (e) {
        if (typeof e === "string") {
            throw new Error(e.toUpperCase());
        } else if (e instanceof Error) {
            res.status(400).json({messageError: e.message })
        };
    }
});


router.get('/task', (req: Request, res: Response) => {
    res.json( [ 
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
    ] )
});

const verifyToken = (req:any,res:any,next:any) => {
    console.log(req.headers)
    try {
        if(!req.headers.authorization) return res.status(401).json({message: 'Unthorize Request'});
    const token = req.headers.authorization.split(' ')[1];
    if( !token ) return res.status(401).json({message:'Unathorize Request'});
    
    const payload:any = jwt.verify(token, 'secretKey');
    req.userId = payload._id;
    next()
    } catch (e) {
        if (typeof e === "string") {
            throw new Error(e.toUpperCase());
        } else if (e instanceof Error) {
            res.status(400).json({messageError: e.message })
        };
    }
}

router.get('/private-task', verifyToken , (req: Request, res: Response) => {
    res.json( [ 
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
    ] )
});

router.get('/profile', verifyToken, (req:any,res: Response) => {
    res.send(req.userId)
});
module.exports = router


