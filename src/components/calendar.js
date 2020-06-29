import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import React from 'react';

export default function CalendarComp({ bookings }) {
  return (
    <div>
      <Calendar
        defaultActiveStartDate={new Date(2020, 5, 29)}
        // tileContent={({ date, view }) =>
        //   view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null
        // }
        // defaultView={(new Date(2020, 5, 29), new Date(2020, 6, 3))}
        // activeStartDate={new Date(2020, 5, 29)}
      />
    </div>
  );
}
