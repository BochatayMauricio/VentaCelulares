import { Router } from 'express';
import { getSales, getSalesCustomer } from '../controllers/sales';

const router = Router();

router.get('/', getSales);
router.get('/:id', getSalesCustomer)
export default router;