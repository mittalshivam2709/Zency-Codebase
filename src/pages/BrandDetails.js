import React from 'react'
import './BrandDetails.css' // Ensure this CSS file exists for stydivng
import icon from '../images/icon.png'
import { useState } from 'react'
import uploadimg from '../images/uploadimg.png'

const BrandDetails = () => {

  const handleGSTsubmit = (e) => {
    console.log("form filled")
  }

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
            <li className="active">
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
        <h1 className="title">Brand Details</h1>
        <hr className="divider" />

        <form className="form-group" onSubmit={handleGSTsubmit}>
          <input
            type="text"
            id="gstDetails"
            className="textarea"
            placeholder="Enter Brand Details*"
            required
          />
          <br />
          <br />
          <input
            type="text"
            id="gstDetails"
            className="textarea"
            placeholder="Enter Manufacture Name*"
            required
          />
          <label htmlFor="gstDetails" className="label">
            Brand trademark number*
          </label>

          <input
            type="text"
            id="gstDetails"
            className="textarea"
            placeholder="Enter Trademeark Registration Number*"
            required
          />
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

          <label htmlFor="gstDetails" className="label">
            Seller Authorization Document*
          </label>

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
            <button className="save-button" type="submit">
              SAVE & CONTINUE
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BrandDetails
