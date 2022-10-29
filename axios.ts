import axios from 'axios'
import { Router, Request, Response } from 'express';
const router = Router();

router.post('/createdSms', async (req: Request, res: Response) => {
    try {
        console.log('aqui genera el sms')

        console.log(req.body)
        res.status(200).json({"message": "successFul"})
    } catch (e) {
        if (e instanceof Error) return res.status(400).json({messageError: e.message });
    }
});

module.exports = router;