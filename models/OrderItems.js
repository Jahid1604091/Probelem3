const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const orderItemSchema = mongoose.Schema(
    {
        order:{
            type:mongoose.Types.ObjectId,
            ref:'Order'
        },
        orderItems: [
            {
                product: { type: String, required: true },
                quantity: { type: Number, required: true },
              
            },

        ],
      
    },
    {
        timestamps: true
    }
)

module.exports = OrderItem = mongoose.model('OrderItem', orderItemSchema)