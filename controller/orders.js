const Order = require("../models/Order");
const OrderItems = require("../models/OrderItems");

exports.createOrder = async (req, res) => {
    const {phone,orderItems} = req.body;
    const order = await new Order({phone});
    const orderItem = new OrderItems({order:order._id,orderItems:[...orderItems]});
    const newOrderItems = await orderItem.save();
    const newOrder = await order.save();


    return res.status(200).json({
        newOrder,
        newOrderItems
    });
}

exports.getOrders = async (req,res)=>{
    const orderItems = await OrderItems.find({}).populate('order','phone -_id');
    return res.status(200).json(orderItems)
}

exports.getOrdersById = async (req,res)=>{
    const orderItem = await OrderItems.findOne({order:req.params.id}).populate('order','phone -_id');
    return res.status(200).json({orderItems:orderItem.orderItems,phone:orderItem.order.phone})
}
