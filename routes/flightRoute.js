const router = require('express').Router();

const controller = require('../controllers/flightController');

router.get('/', controller.getFlight);

router.post('/', controller.createFlight);

router.get('/:id', controller.getSingleFlight);

router.put('/:id', controller.updateFlights);

router.delete('/:id', controller.deleteFlight);

module.exports = router;

