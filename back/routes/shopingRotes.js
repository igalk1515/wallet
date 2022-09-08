const exprees = require('express')
const router = exprees.Router()
const Shoping = require('../controllers/shpoingcontroller')

router.route('/').get(Shoping.getAllShoping).post(Shoping.createNewShoping)

module.exports = router
