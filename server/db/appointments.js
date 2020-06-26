const db = require('./db');
const Sequelize = require('sequelize');

const Appointments = db.define(
  'appointments',
  {
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    slot: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    availability: {
      type: Sequelize.STRING,
      defaultValue: 'Available',
    },
    service: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: true }
);

module.exports = Appointments;
