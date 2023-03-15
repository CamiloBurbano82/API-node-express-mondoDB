const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee');

router.get('/all', employeeController.allEmployees);
router.post('/create', employeeController.createEmployee);
router.put('/update/:id', employeeController.updateEmployee);
router.delete('/delete/:id', employeeController.deleteDevice);

module.exports = router;