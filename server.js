import express from 'express';
import cors from 'cors';
import sensorConfigsRouter from './routes/sensorConfigsRouter.js';
import calibrationRouter from './routes/calibrationRouter.js';
import './dbConnect.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// app.use(cookieParser());

app.get('/', (req, res) => {
    res.send(`<h1>Node-Express-Mongo-Playground</h1>`);
});
app.use('/sensorConfigs', sensorConfigsRouter);
app.use('/calibrations', calibrationRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

app.use(function errorHandler(err, req, res, next) {
    res.status(err.status || 400).send({
        error: {
            message: err.message,
            status: err.status
        }
    });
});
