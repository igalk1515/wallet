const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const connectDB = async () => {
  try {
    // console.log(process.env.DATABASE_URI)
    await mongoose.connect(process.env.DATABASE_URI).then(() => {
      console.log('Connected to MongoDB')
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB
