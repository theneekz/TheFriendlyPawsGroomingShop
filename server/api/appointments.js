const router = require('express').Router();

const Appointments = require('../db/appointments');

//get all appointments
router.get('/', async (req, res, next) => {
  try {
    const thisWeek = await Appointments.findAll();
    res.json(thisWeek);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
