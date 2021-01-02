import React from 'react';
// import Styled from "./styled";

const Home = _ => {
  return (
    <React.Fragment>
      <div className="login-container">
        <h2 style={{ textAlign: "center" }}>User Profile Card</h2>

        <div className="card">
          <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style={{ width: "100%" }} />
          <h1>John Doe</h1>
          <p className="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <div style={{ margin: "24px 0" }}>
            <a href="#dfds"><i className="fa fa-dribbble"></i></a>
            <a href="#sdf"><i className="fa fa-twitter"></i></a>
            <a href="#sdf"><i className="fa fa-linkedin"></i></a>
            <a href="#dsfsd"><i className="fa fa-facebook"></i></a>
          </div>
          <p><button>Contact</button></p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home;