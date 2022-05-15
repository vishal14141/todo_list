const express = require('express');
const router = express.Router();

const actionController = require('../controllers/actionController');

router.post('/save', actionController.save);
router.post('/delete', actionController.delete);

module.exports = router;