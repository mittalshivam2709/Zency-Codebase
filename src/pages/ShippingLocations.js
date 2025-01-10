import React from 'react'
import './ShippingLocations.css' // Ensure this CSS file exists for stydivng
import icon from '../images/icon.png'
import { useState } from 'react'
import uploadimg from '../images/uploadimg.png'

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
            <li>
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
            <li className="active">
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
        <h1 className="title">Shipping Locations</h1>
        <hr className="divider" />
        <div className="location-selector">
          <select className="textarea">
            <option>CCGYT76456678FGTVV</option>
          </select>
          <input type="text" placeholder="Hyderabad" className="textarea" />
        </div>
        <div className="gst-details">
          <p className="gst-label">GST number</p>
          <p className="gst-value">CCGYT76456678FGTVV</p>
          <br />
          <select className="dropdown" className="textarea">
            <option>Select Address</option>
          </select>
          <p className="info-text" style={{ color: '#CC99FF' }}>
            These Addresses Are Fetched From Your GST Information
          </p>
          <br />
          <div className="uploadimagecontainer">
            <label htmlFor="file-upload" className="uploadimage">
              <span role="img" aria-label="upload">
                <img src={uploadimg} alt="" />
              </span>
              &nbsp; Upload the file
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".pdf,.png,.jpg"
              style={{ display: 'none' }}
            />
            <span style={{ color: '#999', fontSize: '12px' }}>
              Maximum File Size: 5mb
              <br />
              Supported Formats: Pdf, Png, Jpg
            </span>
          </div>
          <br />
        </div>
        <br />
        <div className="fssai-section">
          <input
            type="text"
            className="textarea"
            placeholder="Enter FSSAI (optional)"
          />
          <button className="verify-btn">Verify FSSAI</button>
        </div>
        <br />
        <br />

        <div className="uploadimagecontainer">
          <label htmlFor="file-upload" className="uploadimage">
            <span role="img" aria-label="upload">
              <img src={uploadimg} alt="" />
            </span>
            &nbsp; Upload the file
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".pdf,.png,.jpg"
            style={{ display: 'none' }}
          />
          <span style={{ color: '#999', fontSize: '12px' }}>
            Maximum File Size: 5mb
            <br />
            Supported Formats: Pdf, Png, Jpg
          </span>
        </div>
        <div className="button-group">
          <button className="back-button">BACK</button>
          <button className="save-button">Save & Continue</button>
        </div>
      </div>

      <label htmlFor="gstDetails" className="block text-2xl mb-2 text-black">
        GST Details
      </label>
      <input
        type="text"
        name="gstNumber"
        className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white"
        placeholder="Enter GST Details*"
        value={formData.gstNumber} // Bind value to formData
      />

      <label className="text-lg font-semibold">Contact Details</label>
      <input
        name="contactname"
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md text-base"
        placeholder="Contact Name"
        value={formData.contactname}
        onChange={handleChange}
        required
      />
      <input
        name="mobilenumber"
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md text-base"
        placeholder="Mobile Number"
        value={formData.mobilenumber}
        onChange={handleChange}
        required
      />
    </div>
  )
}

export default SellerDetails
