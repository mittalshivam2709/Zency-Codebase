import React from 'react'
import './SellerDetails.css'

function SellerDetails() {
  return (
    <div className="seller-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="icon"></div>
          <h1 className="logo-text">Zency Hub: Fast, Simple, Profitable</h1>
        </div>
        <div className="steps">
          <div className="step active">Seller Details</div>
          <div className="step">Brand Details</div>
          <div className="step">Bank Details</div>
          <div className="step">Shipping Location</div>
          <div className="step">Digital Signature</div>
          <div className="step">Verify And Submit</div>
        </div>
      </aside>

      {/* Content */}
      <main className="main-content">
        <h2 className="content-title">Seller Details</h2>
        <p className="content-subtitle">Enter GST No Of Your Business</p>
        <form className="form">
          <label htmlFor="gst" className="label">
            GST Details
          </label>
          <input
            type="text"
            id="gst"
            placeholder="Enter GST Number"
            className="input-field"
          />
          <div className="form-buttons">
            <button type="button" className="back-btn">
              BACK
            </button>
            <button type="submit" className="save-btn">
              SAVE
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default SellerDetails
