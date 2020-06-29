import React, { useEffect, useState } from 'react';
import fireApp from './fireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import moment from 'moment';
import { Redirect, Link } from 'react-router-dom';

export default function Row({ hourData }) {
  const [user] = useAuthState(fireApp.auth());
  const [newAppt, setNewAppt] = useState({});

  useEffect(() => {
    setNewAppt(hourData);
  }, []);

  const handleChange = (e) => {
    let service = e.target.value;
    let slot = e.currentTarget.children.slot.innerText;
    let date = e.currentTarget.name;
    console.log('service: ', service);
    console.log('slot: ', slot);
    console.log('date: ', date);

    setNewAppt({ date, slot, service, user: user.email });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put('http://localhost:3001/api/appointments', newAppt);
    window.location.reload(false);
  };

  const handleRemove = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:3001/api/appointments/${newAppt.id}`,
      user
    );
    window.location.reload(false);
  };

  //this will be a drop down menu if there is availability, otherwise it will display the service that is already reserved
  const services = (serviceOption) => {
    if (user) {
      if (serviceOption) {
        return <div>{serviceOption}</div>;
      } else {
        return (
          <select name="service">
            <option value="">-</option>
            <option value="Nail Trim">Nail Trim</option>
            <option value="Haircut">Haircut</option>
            <option value="Bath">Bath</option>
          </select>
        );
      }
    } else {
      if (serviceOption) {
        return <div>{serviceOption}</div>;
      } else {
        return <div>Available</div>;
      }
    }
  };

  return (
    <form
      key={hourData.id}
      name={hourData.date}
      className="divFormRow"
      onChange={(e) => handleChange(e)}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div key={hourData.slot} name="slot" className="divCell">
        {moment(hourData.slot, 'HH:mm:ss').format('h:mm:ss A')}
      </div>
      <div name="availability" className="divCell">
        {hourData.availability}
      </div>
      <div name="service" className="divCell">
        {services(hourData.service)}
      </div>
      {!user ? (
        <div></div>
      ) : hourData.availability === 'Available' ? (
        <div className="divCell">
          <button type="submit">Book Appointment</button>
        </div>
      ) : user && hourData.availability === user.email ? (
        <div className="divCell">
          <a href="/schedule">
            <button
              style={{
                backgroundColor: 'rgb(93, 192, 152)',
              }}
              type="button"
              onClick={(e) => handleRemove(e)}
            >
              Cancel Appointment
            </button>
          </a>
        </div>
      ) : (
        <div className="divCell">Booked</div>
      )}
    </form>
  );
}
