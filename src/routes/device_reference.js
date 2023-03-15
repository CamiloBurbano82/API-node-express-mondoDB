const express = require('express');
const router = express.Router();
const device_referenceController = require('../controllers/device_reference');

router.get('/all',device_referenceController.allDevice_Reference);
router.post('/create', device_referenceController.createDevice_Reference);
router.put('/update/:id', device_referenceController.updateDevice_Reference);
router.delete('/delete/:id', device_referenceController.deleteDevice_Reference);

module.exports = router;