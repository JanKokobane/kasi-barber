import { Router } from 'express';
import { bookingController } from '../controller/bookingController.js';

const router = Router();

router.post('/bookings', bookingController.createBooking);

router.get('/health', bookingController.healthCheck);

export default router;