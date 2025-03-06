const express = require('express');
const router = express.Router();
const locationController = require('../controllers/ControllerLocacion');

router.get('/', (req, res) => {
    res.json({ message: "Ruta de ubicación funcionando correctamente" });
});

router.post('/', locationController.createLocation);
router.get('/', locationController.getLocations);
router.get('/:id', locationController.getLocationById);
router.put('/:id', locationController.updateLocation);
router.delete('/:id', locationController.deleteLocation);

module.exports = router;
