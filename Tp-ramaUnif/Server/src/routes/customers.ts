import { Router } from "express";
import { deleteCustomer, getCustomers, updateCustomer } from "../controllers/customers";
import { loginUser } from "../controllers/user";
import validateToken from "./validate-token";
import { getSalesCustomer } from "../controllers/sales";


const router = Router();

router.get('/', getCustomers);
router.delete('/:dni', deleteCustomer);
router.patch('/:dni', updateCustomer)
router.post('/login', loginUser);



export default router;