import React from 'react';
import moment from 'moment';
import Row from './slotRow';

export default function Day({ dayArr }) {
  //takes all of one day's appointments (array of objs)
  //returns a new table for that day where the title is reformatted using moment.js,
  //makes a header row, and then makes the other rows (individual appt info) in a body
  //(since all are from the same day, we can use the info from the first one for the table id/header)

  return (
    <div key={dayArr[0].id}>
      {dayArr && (
        <>
          <h1>{moment(dayArr[0].date).format('dddd, MMMM Do YYYY')}</h1>
          <div className="divTable">
            <div className="divHead">
              <div className="divCell">TIME SLOT</div>
              <div className="divCell">AVAILABILITY</div>
              <div className="divCell">SERVICE</div>
            </div>
            <div className="divBody">
              {dayArr.map((hourData) => (
                <Row hourData={hourData} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
