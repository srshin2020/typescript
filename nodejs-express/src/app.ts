import express, {
    Request,
    Response,
    NextFunction,
    Application,
    ErrorRequestHandler,
} from 'express';
import { Server } from 'http';
import createHttpError from 'http-errors';
import { config } from 'dotenv';

const app: Application = express();
config();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello from ts app');
});

app.use((req: Request, res: Response, next: NextFunction) => {
    next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (
    err,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(err.status || 500);
    res.send({ staus: err.status || 500, message: err.message });
};

app.use(errorHandler);

const port: Number = Number(process.env.PORT) || 4000;

const server: Server = app.listen(port, () => {
    console.log('listening to ' + port);
});
