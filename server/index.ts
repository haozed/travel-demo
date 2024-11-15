import express, { Request, Response } from 'express';
import airportRoute from './src/routes/airportRoute';

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/api/', (req: Request, res: Response) => {
    res.send('Hello Travel Portal');
    });

app.use('/api/airport', airportRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});