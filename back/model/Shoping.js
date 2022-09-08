const mongoose = require('mongoose')

const ShopingSchema = new mongoose.Schema({
  subject: {
    type: String,
    default: 'other',
  },
  Sname: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
  },
  date: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
  month: {
    type: Number,
    default: new Date().getMonth() + 1,
  },
})

module.exports = mongoose.model('Shoping', ShopingSchema)
