import React from 'react';
import "./prizes.css"
function Prizesection() {
  return (
    <div className="container">
      <div className="prize-navbar-container">
        <div className="prize-navbar">
          <h4 className="navbar-prize-item active-prize-item">
            Track 1
          </h4>
          <h4 className="navbar-prize-item">
            Track 2
          </h4>
        </div>
      </div>

      <div className="prize-card-container" data-aos="fade-up">
        <div id="prize-card-container-1" className="prize-card-container-main" data-aos="zoom-out">
          <div className="prize-card">
            <div className="prize-card-number gold" data-aos="zoom-out">
              <p>1st</p>
            </div>
            <div className="prize-card-text">
              <h3>Track 1 Winner</h3>
              <p>Prize: ₹ 75,000</p>
            </div>
          </div>
          {/* Add more prize cards for Track 1 here */}
        </div>
      </div>

      {/* Repeat the above structure for Track 2 */}
      <div className="prize-card-container" data-aos="fade-up">
        <div id="prize-card-container-2" className="prize-card-container-main" data-aos="zoom-out">
          <div className="prize-card">
            <div className="prize-card-number gold" data-aos="zoom-out">
              <p>1st</p>
            </div>
            <div className="prize-card-text">
              <h3>Track 2 Winner</h3>
              <p>Prize: ₹ 75,000</p>
            </div>
          </div>
          {/* Add more prize cards for Track 2 here */}
        </div>
      </div>
    </div>
  );
}

export default Prizesection;
