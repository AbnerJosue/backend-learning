import express from 'express';
const app = express();

const port = 3000 || process.env.PORT;
const cors = require('cors');
require('./src/services/connection');
app.use(express.json());

// app.post('/', (req: any, res: any) => {
//     console.log(req, res)
//     res.send('Hello World!');
// });

app.use('/',require('./src/routes'))

app.listen(port, () => {
    console.log(`Listen in the PORT ${port}`);
})    