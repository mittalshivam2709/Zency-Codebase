import React from 'react'
import './SellerDetails.css' // Ensure this CSS file exists for stydivng
import icon from '../images/icon.png'
import { useState } from 'react'

const SellerDetails = () => {
  const [getGSTdetails, setgetGstDetails] = useState(true)
  const [showOtpPopup, setShowOtpPopup] = useState(false)
  const [takeSellerDetails, settakeSellerDetails] = useState(false)
  const [otp, setOtp] = useState(['', '', '', ''])
  const [showGSTinformation, setshowGSTinformation] = useState(false)

  const handleGSTsubmit = (e) => {
    e.preventDefault() // Prevent form submission
    setShowOtpPopup(true) // Show OTP popup on form submission
    setgetGstDetails(false)
  }

  const handleInputChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
    }
  }

  const handleOTPsubmit = () => {
    setShowOtpPopup(false)
    setshowGSTinformation(true)
    setOtp(['', '', '', '']) // Clear OTP fields
  }

  const verifyGST = () => {
    setshowGSTinformation(false)
    settakeSellerDetails(true)
  }

  const [gstDetails, setGstDetails] = useState({
    legalName: 'DAMODHAR',
    gstNumber: '22DFFUTUFTUFTU25',
    address: 'IIT Roorkee, Roorkee, Uttarakhand 247667',
    gstType: 'Regular',
    tradeName: 'Abcdefghijij',
  })

  return (
    <div className="seller-container">
      <div className="sidebar">
        <div className="icon_and_heading">
          <img src={icon} alt="" />
          <h2>Zency Hub: Fast, Simple, Profitable</h2>
        </div>
        <div className="progress-container">
          <ul className="steps">
            <li className="active">
              <span className="circle"></span>
              {/* <div className='circle'></div> */}
              Seller Details
            </li>
            <li>
              <span className="circle"></span>
              Brand Details
            </li>
            <li>
              <span className="circle"></span>
              Bank Details
            </li>
            <li>
              <span className="circle"></span>
              Shipping Location
            </li>
            <li>
              <span className="circle"></span>
              Digital Signature
            </li>
            <li>
              <span className="circle"></span>
              Verify And Submit
            </li>
          </ul>
          <div className="line"></div>
        </div>
      </div>

      <div className="container">
        <h1 className="title">Seller Details</h1>
        <p className="subtitle">Enter GST No Of Your Business</p>
        <hr className="divider" />

        <form className="form-group" onSubmit={handleGSTsubmit}>
          <label htmlFor="gstDetails" className="label">
            GST Details
          </label>
          <input
            type="text"
            id="gstDetails"
            className="textarea"
            placeholder="Enter GST Details*"
            required
          />
          <div className="button-group">
            {getGSTdetails && (
              <>
                <button className="back-button">BACK</button>
                <button className="save-button" type="submit">
                  SAVE
                </button>
              </>
            )}
          </div>
        </form>

        {showOtpPopup && (
          <form className="overlay" onSubmit={handleOTPsubmit}>
            <div className="popup">
              <h2>Verify Your GST</h2>
              <p>
                We have sent a 4-digit verification code to the phone
                <br />
                number xxxxxxxx46
              </p>
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="otp-input"
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                ))}
              </div>
              <p className="resend-text">
                Resend Code <span>00:02</span>
              </p>
              <button className="save-button" type="submit">
                Verify
              </button>
            </div>
          </form>
        )}

        {showGSTinformation && (
          <>
            <div className="gst-info-box">
              <p>
                <strong>Legal Name:</strong> {gstDetails.legalName}
              </p>
              <p>
                <strong>GST Number:</strong> {gstDetails.gstNumber}
              </p>
              <p>
                <strong>Address of Principal Place of Business:</strong>{' '}
                {gstDetails.address}
              </p>
              <p>
                <strong>GST Type:</strong> {gstDetails.gstType}
              </p>
              <p>
                <strong>Trade Name:</strong> {gstDetails.tradeName}
              </p>
            </div>
            <br />
            <div className="footer-text">
              By clicking "Verify GST Details" you agree that GST belongs to you
            </div>

            <button className="verify-button" onClick={verifyGST}>
              Verify GST Details
            </button>
          </>
        )}
        {takeSellerDetails && (
          <div className="seller-details-container">
            <form className="form-group">
              <label className="label">Company Name</label>
              <input
                type="text"
                className="textarea"
                value={gstDetails.legalName}
                readOnly
              />
              <label className="label">Contact Details</label>
              <input
                type="text"
                className="textarea"
                placeholder="Contact Name"
                required
              />
              <br />
              <br />
              <input
                type="text"
                className="textarea"
                placeholder="Mobile Number"
                required
              />
              <label className="label">Upload GST Certificate</label>
              <input type="file" className="textarea" required />
              <label className="label">Enter PAN Number</label>
              <input
                type="text"
                className="textarea"
                placeholder="Enter PAN Number"
                required
              />
              <label className="label">Upload PAN Document</label>
              <input type="file" className="textarea" required />
              <p>Enter CIN (21 digit) or UDYAM number (19 digits)</p>
            </form>
            <button className="save-button">Save & Continue</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SellerDetails
