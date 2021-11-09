import React from "react";

const Home = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop id="hero-video">
        <source
          src="https://player.vimeo.com/external/231758689.sd.mp4?s=21e6c87c36482efae0fa23be1b1289d44fadd4e5&profile_id=164"
          type="video/mp4"
        />
      </video>
      <div className="hero__container">
        <h2 className="hero__heading">eat healthy and tasty food</h2>
        <p className="hero__paragraph">
          Book at over 2,563,000 Restaurants online. 24/7 Customer Service.
          Secure Booking. Dinners and Breakfasts. Fast Food. Get Instant
          Confirmation. Best Price Guarantee. No Booking Fees.
        </p>
        <a href="index.html" className="hero__btn">
          book table
        </a>
      </div>
    </section>
  );
};

export default Home;
