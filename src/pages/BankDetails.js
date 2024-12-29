import React from 'react'
import './BankDetails.css' // Ensure this CSS file exists for stydivng
import icon from '../images/icon.png'
import { useState } from 'react'
import uploadimg from '../images/uploadimg.png'

const BrandDetails = () => {
  const [formData, setFormData] = useState({
    gstNumber: 'CGGYT76456678BFCTVV',
    legalName: 'Damodhar',
    bankAccountNumber: '',
    reBankAccountNumber: '',
    ifscCode: '',
    bankType: '',
    cancelledCheque: null,
  })

  const handleGSTsubmit = (e) => {
    console.log('form filled')
  }
  const details = {
    legalName: 'DAMODHAR',
    gstNumber: '22DFFUTUFTUFTU25',
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
            <li className="active">
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
        <h1 className="title">Bank Details</h1>
        <hr className="divider" />
        <label htmlFor="gstDetails" className="label">
          GST Number
        </label>
        <input
          type="text"
          id="gstDetails"
          className="textarea"
          value={formData.gstNumber}
          readOnly
        />
        <label htmlFor="gstDetails" className="label">
          Legal Name
        </label>
        <input
          type="text"
          id="gstDetails"
          className="textarea"
          value={formData.legalName}
          readOnly
        />
        <br />
        <br />
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
            placeholder="Bank Account Number*"
            required
          />
          <br />
          <br />
          <input
            type="text"
            id="gstDetails"
            className="textarea"
            placeholder="Re-enter Bank Account Number*"
            required
          />
          <br />
          <br />
          <input
            type="text"
            id="gstDetails"
            className="textarea"
            placeholder="IFSC Code*"
            required
          />
          <br /><br />
          <label>Bank Type *</label>
          <br />   <br />
          <select
            name="bankType"
            value={formData.bankType}
            style={{backgroundColor:'white'}}
            className='textarea'
            // onChange={handleInputChange}
            required
          >
            <option value="">Bank Type</option>
            <option value="Savings">Savings</option>
            <option value="Current">Current</option>
          </select>

          <label htmlFor="gstdetails" className="label">
            {' '}
            Upload Cancelled Cheque
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
          <span style={{ color: '#999', fontSize: '12px' }}>
            A small amount will be Credited in Your Bank Account to verify your
            Bank Account Details.
          </span>

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
