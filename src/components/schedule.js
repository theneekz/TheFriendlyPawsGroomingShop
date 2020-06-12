import React from 'react';
import fireApp from './fireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

export default function Schedule() {
  const [user] = useAuthState(fireApp.auth());

  const dbRefObj = fireApp.database().ref();

  dbRefObj.on('value', (snap) => console.log(snap.val()));

  const services = () => (
    <select>
      <option value="">-</option>
      <option value="nail trim">Nail Trim</option>
      <option value="haircut">Haircut</option>
      <option value="bath">Bath</option>
    </select>
  );
  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  let slots = [
    '7:30 AM - 8:00 AM',
    '8:00 AM - 8:30 AM',
    '8:30 AM - 9:00 AM',
    '9:00 AM - 9:30 AM',
    '9:30 AM - 10:00 AM',
    '10:00 AM - 10:30 AM',
    '10:30 AM - 11:00 AM',
    '11:00 AM - 11:30 AM',
    '11:30 AM - 12:00 PM',
    '1:30 PM - 2:00 PM',
    '2:00 PM - 2:30 PM',
  ];
  let row = (slot) => (
    <tr>
      <td>{slot}</td>
      <td>Available</td>
      <td>{services()}</td>
      <td>
        <button>Book Appointment</button>
      </td>
    </tr>
  );
  let dayTable = (day) => (
    <div>
      <h1>{day}</h1>
      <table>
        <thead>
          <tr>
            <th>TIME SLOT</th>
            <th>AVAILABILITY</th>
            <th>SERVICE</th>
          </tr>
        </thead>
        <tbody>{slots.map((slot) => row(slot))}</tbody>
      </table>
    </div>
  );
  return (
    <div>
      <div>
        {user ? (
          <p>Logged in as: {user.email}</p>
        ) : (
          <p>
            Please log in before scheduling an appointment.
            <button>
              <Link to="/login">Login</Link>
            </button>
          </p>
        )}
      </div>
      {days.map((day) => dayTable(day))}
    </div>
  );
}
