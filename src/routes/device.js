const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device');

router.get('/all', deviceController.allDevices);
router.post('/create', deviceController.createDevice);
router.put('/update/:id', deviceController.updateDevice);
router.delete('/delete/:id', deviceController.deleteDevice);

module.exports = router;