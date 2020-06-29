import React, { useEffect, useState } from 'react';
import fireApp from './fireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Day from './dayTable';
import Calendar from './calendar';

export default function Schedule() {
  const [user] = useAuthState(fireApp.auth());
  const [apts, setApts] = useState([]);

  //react hook to run as component did mount (hence empty array as second arg)
  //initializes async axios request func and then immediately calls it
  //sets the respose.data to this components state as apts
  useEffect(() => {
    const getAppointments = async () => {
      try {
        const { data } = await axios.get(
          'http://localhost:3001/api/appointments'
        );
        setApts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAppointments();
  }, []);

  //takes an array of appointments and returns an array of arrays, seperated by day
  const makeDays = (bookings) => {
    if (bookings) {
      let days = [
        '2020-06-29',
        '2020-06-30',
        '2020-07-01',
        '2020-07-02',
        '2020-07-03',
      ];
      let result = [];
      for (let day of days) {
        let tempArr = bookings.filter((booking) => booking.date === day);
        result.push(tempArr);
      }
      return result;
    }
    return;
  };

  //uses the above func with our week's worth of appts we're storing on state
  let bookings = makeDays(apts);

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
      <div>
        <Calendar bookings={bookings} />
      </div>
      {bookings[0].length && bookings.map((dayArr) => <Day dayArr={dayArr} />)}
    </div>
  );
}
