import express from 'express';
const app = express();
require('./src/services/connection');
import bodyParser from "body-parser";
const port = 4081 || process.env.PORT;
const cors = require('cors');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', require('./src/routes/index'))
app.listen(port, () => {
    console.log(`Listen in the PORT ${port}`);
})