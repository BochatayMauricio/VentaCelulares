"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customers_1 = require("../controllers/customers");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.get('/', customers_1.getCustomers);
router.delete('/:dni', customers_1.deleteCustomer);
router.patch('/:dni', customers_1.updateCustomer);
router.post('/login', user_1.loginUser);
router.get('/:id', customers_1.getSalesUser);
exports.default = router;