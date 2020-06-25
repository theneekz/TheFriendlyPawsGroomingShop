import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="mainLogo">
        <img src="FP.png" />
      </div>
      <div className="home">
        <h3>
          A retro-inspired beauty shop for dogs providing one on one specialized
          care for your pets.
          <p>
            Our beautifully styled pet trims, breed standard grooming, and
            specialized services are handcrafted to create a wholesome and
            calming expierence for your dog.
          </p>
        </h3>

        <h2>Some Of Our PAWesome Clients:</h2>
        <img className="homeDog" src="1.jpg" />
        <img className="homeDog" src="2.jpg" />
        <img className="homeDog" src="3.jpg" />
        <img className="homeDog" src="4.jpg" />
        <img className="homeDog" src="5.jpg" />
        <img className="homeDog" src="6.jpg" />
      </div>
    </div>
  );
}
