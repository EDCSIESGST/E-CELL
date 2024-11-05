// RegistrationForm.js

import React from 'react';

// Import CSS file
import './gis.css'
const RegistrationForm = () => {
  return (
    <div>
        <section id='regis'>
        <div class="rgcontainer">
      <div class="title">Registration</div>
      <div class="content">
        <form action="#">
          <div class="user-details">
            <div class="input-box">
              <span class="details">Team name</span>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div class="input-box">
              <span class="details">Member-1</span>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input type="text" placeholder="Enter your number" required />
            </div>
          
            <div class="input-box">
              <span class="details">Member-2</span>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input type="text" placeholder="Enter your number" required />
            </div>
            <div class="input-box">
              <span class="details">Member-3</span>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input type="text" placeholder="Enter your number" required />
            </div>
            <div class="input-box">
              <span class="details">Member-4/Optional</span>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input type="text" placeholder="Enter your number" required />
            </div>
          
          </div>
        
          <div class="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
    </section>
    </div>
  );
};

export default RegistrationForm;
