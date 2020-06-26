import React, { useEffect, useState } from 'react';
import fireApp from './fireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

export default function Schedule() {
  const [user] = useAuthState(fireApp.auth());
  const [apts, setApts] = useState([]);
  const [newAppt, setNewAppt] = useState({});

  //react hook to run as component did mount (hence the empty array as second arg)
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
        let tempArr = bookings.filter((booking) => booking.date == day);
        result.push(tempArr);
      }
      return result;
    }
    return;
  };

  //uses the above func with our result from the axios request we're storing on state
  let bookings = makeDays(apts);

  //takes all of one day's appointments (array of objs)
  //returns a new table for that day where the title is reformatted using moment.js,
  //makes a header row, and then makes the other rows (individual appt info) in a body
  //(since all are from the same day, we can use the info from the first one for the table id/header)
  let dayTable = (dayArr) => {
    return (
      <div key={dayArr[0].id}>
        <h1>{moment(dayArr[0].date).format('dddd, MMMM Do YYYY')}</h1>
        <div className="divTable">
          <div className="divHead">
            <div className="divCell">TIME SLOT</div>
            <div className="divCell">AVAILABILITY</div>
            <div className="divCell">SERVICE</div>
          </div>

          <div className="divBody">
            {dayArr.map((hourData) => row(hourData))}
          </div>
        </div>
      </div>
    );
  };

  //takes in each appt and creates a row with time, availability, service, and a book now button
  let row = (hourData) => (
    <div key={hourData.id} className="divRow">
      <form className="test">
        <div className="divCell">
          {moment(hourData.slot, 'HH:mm:ss').format('h:mm:ss A')}
        </div>
        <div className="divCell">{hourData.availability}</div>
        <div className="divCell">{services(hourData.service)}</div>
        <div className="divCell">
          <button type="submit">Book Appointment</button>
        </div>
      </form>
    </div>
  );

  //this will be a drop down menu if there is availability, otherwise it will display the service that is already reserved
  const services = (serviceOption) => {
    if (serviceOption) {
      return <div className="divCell">{serviceOption}</div>;
    } else {
      return (
        <select>
          <option value="">-</option>
          <option value="Nail Trim">Nail Trim</option>
          <option value="Haircut">Haircut</option>
          <option value="Bath">Bath</option>
        </select>
      );
    }
  };

  // const handleSubmit = (e) => {
  //   e.prevent.default();
  //   console.log(event.target.value);
  // };

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
      {bookings[0].length && bookings.map((dayArr) => dayTable(dayArr))}
    </div>
  );
}
