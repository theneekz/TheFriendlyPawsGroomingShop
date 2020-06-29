const router = require('express').Router();

const Appointments = require('../db/appointments');
const moment = require('moment');
//helper func for time slots

function makeMilitary(slot) {
  return moment(slot, 'h:mm:ss A').format('HH:mm:ss');
}
//ROUTES TO LOCALHOST:3001/API/APPOINTMENTS

//get all appointments
router.get('/', async (req, res, next) => {
  try {
    const thisWeek = await Appointments.findAll({
      order: [['slot', 'ASC']],
    });
    res.json(thisWeek);
  } catch (error) {
    next(error);
  }
});

//update appointment to booked with user's email & service
router.put('/', async (req, res, next) => {
  try {
    const foundApt = await Appointments.findOne({
      where: {
        date: req.body.date,
        slot: makeMilitary(req.body.slot),
      },
    });
    if (foundApt.availability === 'Available') {
      await foundApt.update({
        service: req.body.service,
        availability: req.body.user,
      });
      await foundApt.save();
      res.sendStatus(201);
    } else {
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

router.put('/:apptId', async (req, res, next) => {
  try {
    const apptToReset = await Appointments.findOne({
      where: {
        id: req.params.apptId,
        availability: req.body.email,
      },
    });
    apptToReset.update({
      service: null,
      availability: 'Available',
    });
    await apptToReset.save();
    res.sendStatus(205);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
