const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand');

router.get('/all', brandController.allBrand);
router.post('/create', brandController.createBrand);
router.put('/update/:id', brandController.updateBrand);
router.delete('/delete/:id', brandController.deleteBrand);

module.exports = router;