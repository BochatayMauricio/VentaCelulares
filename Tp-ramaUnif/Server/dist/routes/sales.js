"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sales_1 = require("../controllers/sales");
const router = (0, express_1.Router)();
router.get('/', sales_1.getSales);
router.get('/:id', sales_1.getSalesCustomer);
exports.default = router;
