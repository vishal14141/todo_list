const express = require('express');
const router = express.Router();

const actionController = require('../controllers/actionController');

router.get('/save', actionController.save);
router.get('/delete', actionController.delete);

module.exports = router;