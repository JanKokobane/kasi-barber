import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Northline Barbers API is running'
  });
});

app.use('/api', bookingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Northline Barbers API running on port ${PORT}`);
});