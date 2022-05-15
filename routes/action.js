const express = require('express');
const router = express.Router();

const actionController = require('../controllers/actionController');

router.post('/save', actionController.save);
router.get('/delete', actionController.delete);
router.get('/finished', actionController.finish);

module.exports = router;