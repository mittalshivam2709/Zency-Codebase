import React from 'react'
import './LoginPage.css' // Updated CSS
import promo from '../images/promo.png'
import logo from '../images/logo.png'

function App() {
  return (
    <div className="main-container">

      <header className="header">
        <img src={logo} alt="Zency Logo" className="logo" />
        <button className="create-account-btn">CREATE ACCOUNT</button>
      </header>

      <div className="content">
          <img src={promo} alt="Promotional Content" className="promo-image" />

        <div className="signup-section">
          <h2 className="welcome-title">Welcome To Zency</h2>
          <p className="subtitle">Sign up and Start selling your products</p>
          <form className="signup-form">
            <label htmlFor="phone-number" className="label">
              Phone Number*
            </label>
            <input
              type="text"
              id="phone-number"
              name="phone-number"
              placeholder="+91"
              className="input-field"
            />
            <button type="submit" className="get-otp-btn">
              Get OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
