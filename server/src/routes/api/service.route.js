'use strict'

const express = require('express')
const router = express.Router()
const weatherController = require('../../controllers/weather.controller')
const auth = require('../../middlewares/authorization')

// Authentication example
router.post('/weather', auth(), weatherController.weather);

router.get('/secret2', auth(['admin']), (req, res) => {
    // example route for auth
    res.json({message: 'Only admin can access'})
})
router.get('/secret3', auth(['user']), (req, res) => {
    // example route for auth
    res.json({message: 'Only user can access'})
})

module.exports = router
