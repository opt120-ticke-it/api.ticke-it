import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './modules/user/user.routes';
import authRoutes from './modules/auth/auth.routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
