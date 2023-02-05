import express from 'express';
import { log } from './log';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    console.log('get request on root');
    res.send('Hello');
    log('logged');
});
app.listen(5000, () => {
    console.log('listening from port 5000....');
});
