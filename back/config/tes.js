// const conectDB = require('./dbConn')
// const Shoping = require('../model/Shoping')
// const controller = require('../controllers/shpoingcontroller')

// const createNewShoping = async (req) => {
//   const { subject, Sname, price, comment } = req
//   if (!price) {
//     console.log('Please enter a price')
//   }
//   const newShoping = await Shoping.create({ subject, Sname, price, comment })
//   if (newShoping) {
//     console.log(newShoping)
//   } else {
//     console.log('cant create new shoping')
//   }
// }

// const getAllShoping = async () => {
//   const shopings = await Shoping.find().lean()
//   if (shopings) {
//     console.log(shopings)
//   } else {
//     console.log('cant get all shopings')
//   }
// }

// const res = {
//   subject: 'תרופות',
//   Sname: 'סופר פארם',
//   price: 1000,
//   comment: 'רטלין ומשכה לרגליים ',
// }

// console.log(res)

// // conectDB()

// // createNewShoping(res)

// // getAllShoping()

// // const date = new Date()
// // console.log(date)
// // console.log(date.getMonth() + 1)
const date = new Date()
console.log(date.toLocaleDateString())
