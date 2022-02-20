import express from 'express';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    console.log('get request')
    res.send("Hello");
})
app.listen(5000, () => {
    console.log('listening from port 5000....')
})