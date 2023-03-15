const express = require('express');
const router = express.Router();
const device_employeesController = require('../controllers/devices_employees');

router.get('/all', device_employeesController.allDevices_Employees);
router.post('/create', device_employeesController.createDevices_Employees);
router.put('/update/:id', device_employeesController.updateDevices_Employees);
router.delete('/delete/:id', device_employeesController.deleteDevice_Employees);

module.exports = router;