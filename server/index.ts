import express from 'express';
import bodyParser from 'body-parser';
import router from "./routes";

const app = express();

app.use(bodyParser.json())
app.use('/', router);

app.listen(5000, () => {
    console.log('App listening on port 5000')
});
