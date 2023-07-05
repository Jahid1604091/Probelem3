
const express = require('express');
const router = express.Router();
const { createOrder, getOrders, getOrdersById } = require('../controller/orders');

router.route('/').post( createOrder)
                .get(getOrders)

router.get('/:id',getOrdersById)

module.exports = router;