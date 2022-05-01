import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes';
import sequelize, { Todos } from './db';

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

sequelize.sync().then(() => {
  Todos.bulkCreate([{ text: 'Buy bread' }, { text: 'Wash car' }]);
});

app.listen(5000, () => {
  console.log('App listening on port 5000');
});
