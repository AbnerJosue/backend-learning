import express from 'express';
import './src/services/connection';
import bodyParser from "body-parser";
import routes from './src/routes'

const port = 4081 || process.env.PORT;
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);
app.listen(port, () => {
    console.log(`Listen in the PORT ${port}`);
})