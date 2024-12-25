import React from 'react'
import './SellerDetails.css' // Ensure this CSS file exists for stydivng
import icon from '../images/icon.png'

const SellerDetails = () => {
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
      {/* 
      <div class="main-content">
        <h1>Seller Details</h1>
        <p>Enter GST No Of Your Business</p>
        <div className='inputarea'>
          <label for="gst-details" className='gstheader'>GST Details</label>
          <textarea id="gst-details" rows="4" placeholder="Info"></textarea>
        </div>
        <div class="button-group">
          <button class="back-button">BACK</button>
          <button class="save-button">SAVE</button>
        </div>
      </div> */}

      <div className="container">
        <h1 className="title">Seller Details</h1>
        <p className="subtitle">Enter GST No Of Your Business</p>
        <hr className="divider" />

        <div className="form-group">
          <label htmlFor="gstDetails" className="label">
            GST Details
          </label>
          <textarea
            id="gstDetails"
            placeholder="Info"
            className="textarea"
          ></textarea>
        </div>

        <div className="button-group">
          <button className="back-button">BACK</button>
          <button className="save-button">SAVE</button>
        </div>
      </div>
    </div>
  )
}

export default SellerDetails
