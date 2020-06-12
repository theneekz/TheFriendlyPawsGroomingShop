import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="home">
      <h1>Services</h1>
      <div className="serviceList">
        <div className="service">
          <h2>Nail Trim - 30 min.</h2>
          <p>Nail trim and file.</p>
          <Link to="/schedule">
            <button>Book Now</button>
          </Link>
        </div>
        <div className="service">
          <h2>Hair Cut - 30 min </h2>
          <p>
            Full hair cut includes ear cleaning, bath, blowdry, brush/deshed if
            applicable, and trim.
          </p>
          <Link to="/schedule">
            <button>Book Now</button>
          </Link>
        </div>
        <div className="service">
          <h2>Bath and Tidy - 60 min </h2>
          <p>
            Bath, blow-dry, ears cleaned, nails cut and filed, trimming around
            feet, face, and rear.
          </p>
          <Link to="/schedule">
            <button>Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
