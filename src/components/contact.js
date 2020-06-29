import React from 'react';

export default function Contact() {
  return (
    <div className="contactParent">
      <div className="contact">
        <div>
          <h1>7746 W Devon Ave Chicago, Illinois 60631</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11860.603494955607!2d-87.8208838!3d41.9970375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x635a8e5c0843c1b9!2sThe%20Friendly%20Paws%20Grooming%20Shop!5e0!3m2!1sen!2sus!4v1591826137761!5m2!1sen!2sus"
            width="400"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div>
          <table>
            <tbody>
              <h2>
                <tr>
                  <td>Monday</td>
                  <td>7:30 AM - 2 PM</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>7:30 AM - 2 PM</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>7:30 AM - 2 PM</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>7:30 AM - 2 PM</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>7:30 AM - 2 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>9 AM - 1 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
              </h2>
            </tbody>
          </table>
          <h2>Phone: (312) 715-8233</h2>
          <div className="socials">
            <a href="https://www.facebook.com/thefriendlypawsgrooming">
              <img src="fb.png" />
            </a>
            <a href="https://www.instagram.com/thefriendlypawsgrooming">
              <img src="insta.png" />
            </a>
            <a href="mailto:thefriendlypawsgrooming@gmail.com">
              <img src="email.png" />
            </a>
          </div>
        </div>
      </div>
      <div className="home about">
        <h1>About Us</h1>
        <h2>
          Friendly Paws is a dog grooming business on the North East side of
          Chicago in Edison Bark - I mean Park. But there is only one employee!
          To help with scheduling her paw-esome clients, the owner would like a
          site for making appointments. That way she can spend less time barking
          on the phone and more time pampering her pals.
          <p>
            Open 6 days a week from 7:30am - 2pm on weekdays, 9am - 1pm on
            Saturdays, <br />
            this app will aim to allow customers to sign up for a Nail Trim, a
            Hair Cut,
            <br />
            or a Bath and Tidy (en-tails a bath, teeth cleaning, hair cut, and
            nail trim).
            <br />
            Each customer will have to create an account, enter the pampering
            option they would like their pal to receive,
            <br />
            and most importantly - select the date and time.
            <br />
            As patrons fill up the schedule, new customers should be unable to
            reserve the booked time slots.
          </p>
        </h2>
      </div>
    </div>
  );
}
