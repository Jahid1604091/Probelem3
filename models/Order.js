const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    
        phone: {
            type: String,
        },
    },
    {
        timestamps: true
    }
)

module.exports = Order = mongoose.model('Order', orderSchema)
