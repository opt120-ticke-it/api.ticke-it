import express from 'express';
import dotenv from 'dotenv';
import appRoutes from './routes';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(appRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
