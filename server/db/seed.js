const db = require('../db');
const Appointments = require('./appointments');

let days = [
  '2020-06-29',
  '2020-06-30',
  '2020-07-01',
  '2020-07-02',
  '2020-07-03',
];
let slots = [
  '7:30',
  '8:00',
  '8:30',
  '9:00',
  '9:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '13:00',
  '13:30',
  '14:00',
];

const weekOfBookings = [];

for (let date of days) {
  for (let slot of slots) {
    weekOfBookings.push({ date, slot });
  }
}

async function seed() {
  console.log('seeding...');
  try {
    await db.sync({ force: true });
    console.log('db synced');

    await Appointments.bulkCreate(weekOfBookings);

    console.log('seeded successfully');
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

seed();

module.exports = seed;
