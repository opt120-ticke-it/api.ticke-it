import express, { Request, Response } from 'express';
import { env } from './config/env';

const PORT = env.PORT || 3334;

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Tá rodando!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
