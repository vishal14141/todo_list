const express = require('express');
const router =express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.get('/home', homeController.home);

//If any path starts with /todo , it will gonna require './action' 
router.use('/todo', require('./action'));

module.exports = router;
