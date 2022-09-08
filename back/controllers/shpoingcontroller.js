const Shoping = require('../model/Shoping')
const asyncHandler = require('express-async-handler')

// Create a new shoping
// POST /shoping
const createNewShoping = asyncHandler(async (req, res, next) => {
  const { subject, Sname, price, comment } = req.body
  if (!price) {
    return res.status(400).json({ msg: 'Please enter a price' })
  }
  const newShoping = await Shoping.create({ subject, Sname, price, comment })
  if (newShoping) {
    console.log('newShoping', newShoping)
    res.status(201).json(newShoping)
  } else {
    res.status(400).json({ msg: 'cant create new shoping' })
  }
})

// Get all shopings
// GET /shoping
const getAllShoping = asyncHandler(async (req, res, next) => {
  const shopings = await Shoping.find().lean()
  if (shopings) {
    console.log(shopings)
    res.status(200).json(shopings)
  } else {
    res.status(400).json({ msg: 'cant get all shopings' })
  }
})

// Get a shoping by Date
// GET /shoping/:date
const getShopingByDate = asyncHandler(async (req, res, next) => {
  const { Date } = req.body
  const shoping = await Shoping.find({ date: Date })
  if (shoping) {
    console.log(shoping)
    res.status(200).json(shoping)
  } else {
    res.status(400).json({ msg: 'cant get shoping by date' })
  }
})

// Get a shoping by month
// GET /shoping/:month
const getShopingByMonth = asyncHandler(async (req, res, next) => {
  const { month } = req.body
  const shoping = await Shoping.find({ month: month })
  if (shoping) {
    console.log(shoping)
    res.status(200).json(shoping)
  } else {
    res.status(400).json({ msg: `cant find ${month}` })
  }
})

module.exports = {
  createNewShoping,
  getAllShoping,
  getShopingByDate,
  getShopingByMonth,
}
