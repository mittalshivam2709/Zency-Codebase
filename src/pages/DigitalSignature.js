import React from 'react'
import './DigitalSignature.css' // Ensure this CSS file exists for stydivng
import icon from '../images/icon.png'
import { useState } from 'react'
import uploadIcon from '../images/uploadicon.png'

const DigitalSignature = () => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDrop = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setSelectedFile(file)
    }
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
            <li className="active">
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
        <h1 className="title">Digital Signature</h1>
        <hr className="divider" />
        <div className="main-content">
          <div
            className="upload-section"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="upload-box">
              <img src={uploadIcon} alt="Upload Icon" className="upload-icon" />
              <p>Drag & Drop File Or Browse</p>
              <input
                type="file"
                accept=".jpg,.png"
                onChange={handleFileChange}
                className="file-input"
              />
              {selectedFile && (
                <p className="file-name">Selected File: {selectedFile.name}</p>
              )}
              <p className="upload-info">
                Supported Formats: Jpg, Png <br /> Maximum File Size: 2 MB
              </p>
              <p className="upload-info"></p>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button className="back-button">BACK</button>
          <button className="save-button">Save & Continue</button>
        </div>
      </div>
    </div>
  )
}

export default DigitalSignature
