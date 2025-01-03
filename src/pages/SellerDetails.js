import React from 'react'
import './SellerDetails.css' // Ensure this CSS file exists for stydivng
import icon from '../images/icon.png'
import { useState } from 'react'
import uploadimg from '../images/uploadimg.png'
import { useEffect } from 'react'
import uploadIcon from '../images/uploadicon.png'

const SellerDetails = () => {
  const [pageflag, setpageflag] = useState('OnlyGST')
  const [componentflag, setcomponentflag] = useState('')

  const [getGSTdetails, setgetGstDetails] = useState(true)
  const [otp, setOtp] = useState(['', '', '', ''])
  const [isTimerActive, setIsTimerActive] = useState(false) // New state for timer activation
  const [timer, setTimer] = useState(8) // Set initial time to 8 seconds
  const [isClickable, setIsClickable] = useState(false)
  const [inputType, setInputType] = useState('')

  const handleOTPinputchange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
    }
  }

  const handleOTPsubmit = () => {
    setcomponentflag('showGSTinfo')
    setOtp(['', '', '', '']) // Clear OTP fields
  }

  const verifyGST = () => {
    setcomponentflag('takeSellerDetails')
  }

  const handleCINChange = (e) => {
    const { name, value } = e.target
    setInputType(
      name === 'cin' && value ? 'cin' : name === 'udyam' && value ? 'udyam' : ''
    )
  }

  const [gstDetails, setGstDetails] = useState({
    legalName: 'DAMODHAR',
    gstNumber: '22DFFUTUFTUFTU25',
    address: 'IIT Roorkee, Roorkee, Uttarakhand 247667',
    gstType: 'Regular',
    tradeName: 'Abcdefghijij',
  })

  const handleGSTsubmit = (e) => {
    e.preventDefault() // Prevent form submission
    setcomponentflag('askOTP')
    setgetGstDetails(false)
    setIsTimerActive(true) // Activate timer on save
  }

  const submitSellerDetails = () => {
    console.log('ih')
    alert('hello')
    setpageflag('BrandDetails')
  }

  useEffect(() => {
    let interval = null

    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
    } else if (timer === 0) {
      setIsClickable(true) // Enable resend button when timer ends
    }

    return () => clearInterval(interval)
  }, [isTimerActive, timer])

  const handleResend = () => {
    if (isClickable) {
      setTimer(8) // Reset timer
      setIsClickable(false) // Disable button
      console.log('Code resent!')
    }
  }

  const handleBrandDetails = () => {
    setpageflag('BankDetails')
  }

  const handleBankDetails = () => {
    setpageflag('ShippingLocation')
  }
  const handleShippingLocations = () => {
    setpageflag('DigitalSignature')
  }

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

  const [formData, setFormData] = useState({
    gstNumber: 'CGGYT76456678BFCTVV',
    legalName: 'Damodhar',
    bankAccountNumber: '',
    reBankAccountNumber: '',
    ifscCode: '',
    bankType: '',
    cancelledCheque: null,
  })

  return (
    <div className="flex h-[100vh]">
      <div className="bg-[#EBF3FA] p-[1%] w-1/4 flex flex-col items-start relative">
        <div className="flex items-center justify-between">
          <img src={icon} alt="" />
          <h2 className="font-bold text-[#6e60f9] inline-block">
            Zency Hub: Fast, Simple, Profitable
          </h2>
        </div>
        <div className="relative w-full h-full pl-[20%] flex items-center">
          {/* <ul className="steps"> */}
          <ul className="list-none p-0 m-0 w-full h-full">
            <li className="flex items-center my-1 text-xl mt-[30%]">
              <span className="w-4 h-4 rounded-full bg-gray-300 mr-2 relative z-10"></span>
              Account Creation
            </li>
            <li className="flex items-center my-1 text-xl mt-[30%] text-[#6e60f9] font-bold">
              <span className="w-4 h-4 rounded-full bg-gray-300 mr-2 relative z-10 active:bg-[#6e60f9]"></span>
              Seller Details
            </li>
            <li className="flex items-center my-1 text-xl mt-[30%]">
              <span className="w-4 h-4 rounded-full bg-gray-300 mr-2 relative z-10"></span>
              Brand Details
            </li>
            <li className="flex items-center my-1 text-xl mt-[30%]">
              <span className="w-4 h-4 rounded-full bg-gray-300 mr-2 relative z-10"></span>
              Bank Details
            </li>
            <li className="flex items-center my-1 text-xl mt-[30%]">
              <span className="w-4 h-4 rounded-full bg-gray-300 mr-2 relative z-10"></span>
              Shipping Location
            </li>
            <li className="flex items-center my-1 text-xl mt-[30%]">
              <span className="w-4 h-4 rounded-full bg-gray-300 mr-2 relative z-10"></span>
              Digital Signature
            </li>
            <li className="flex items-center my-1 text-xl mt-[30%]">
              <span className="w-4 h-4 rounded-full bg-gray-300 mr-2 relative z-10"></span>
              Verify And Submit
            </li>
          </ul>
          <div className="absolute top-[10%] left-[6%] w-[0.15rem] h-[70%] bg-gray-300 z-0 ml-[16%]"></div>
        </div>
      </div>

      {pageflag === 'OnlyGST' && (
        <div className="p-10 w-full font-sans text-left overflow-y-auto">
          <h1 className="text-[3rem] font-bold mb-1">Seller Details</h1>
          <p className="text-[1em] mb-5">Enter GST No Of Your Business</p>
          <hr className="border-0 border-b border-gray-300 mb-5" />

          <form className="mb-10" onSubmit={handleGSTsubmit}>
            <label
              htmlFor="gstDetails"
              className="block text-[2rem] mb-2 text-black"
            >
              GST Details
            </label>
            <input
              type="text"
              id="gstDetails"
              className="w-[60vw] rounded-lg border border-gray-300 p-2 text-[1rem]"
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

          {componentflag === 'askOTP' && (
            <form className="overlay" onSubmit={handleOTPsubmit}>
              <div className="popup">
                <h2>Verify Your GST</h2>
                <p>We have sent a 4-digit verification code to your phone.</p>
                <div className="otp-container">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      className="otp-input"
                      value={digit}
                      onChange={(e) =>
                        handleOTPinputchange(index, e.target.value)
                      }
                      required
                    />
                  ))}
                </div>
                <button
                  className="resend-text"
                  onClick={handleResend}
                  disabled={!isClickable}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: isClickable ? 'blue' : 'gray',
                    cursor: isClickable ? 'pointer' : 'not-allowed',
                  }}
                >
                  Resend Code{' '}
                  {isClickable ? '' : `00:${timer < 10 ? `0${timer}` : timer}`}
                </button>
                <br />
                <button className="save-button" type="submit">
                  Verify
                </button>
              </div>
            </form>
          )}

          {componentflag === 'showGSTinfo' && (
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
                By clicking "Verify GST Details" you agree that GST belongs to
                you
              </div>

              <button className="verify-button" onClick={verifyGST}>
                Verify GST Details
              </button>
            </>
          )}

          {componentflag === 'takeSellerDetails' && (
            <div className="seller-details-container">
              <form className="form-group" onSubmit={submitSellerDetails}>
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
                <label className="label">Upload GST document</label>

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
                <label className="label">Enter PAN Number</label>
                <input
                  type="text"
                  className="textarea"
                  placeholder="Enter PAN Number"
                  required
                />
                <label className="label">Upload PAN Document</label>

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
                <div>
                  <h3>Select CIN (21 digit) OR UDYAM number (19 digit) *</h3>
                  <div>
                    <input
                      type="text"
                      name="cin"
                      placeholder="Enter CIN"
                      onChange={handleCINChange}
                    />
                    <input
                      type="radio"
                      name="selection"
                      value="cin"
                      checked={inputType === 'cin'}
                      readOnly
                    />
                    <input
                      type="text"
                      name="udyam"
                      placeholder="Enter UDYAM number"
                      onChange={handleCINChange}
                    />
                    <input
                      type="radio"
                      name="selection"
                      value="udyam"
                      checked={inputType === 'udyam'}
                      readOnly
                    />
                  </div>

                  {inputType === 'cin' && (
                    <div>
                      <h4>Upload CIN Document *</h4>

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
                    </div>
                  )}

                  {inputType === 'udyam' && (
                    <div>
                      <h4>Upload UDYAM Document *</h4>

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
                    </div>
                  )}
                </div>
                <button className="save-button" type="submit">
                  Save & Continue
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {pageflag == 'BrandDetails' && (
        <div className="seller-container">
          <div className="container">
            <h1 className="title">Brand Details</h1>
            <hr className="divider" />

            <form className="form-group" onSubmit={handleBrandDetails}>
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
      )}

      {pageflag === 'BankDetails' && (
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
          <form className="form-group" onSubmit={handleBankDetails}>
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
            <br />
            <br />
            <label>Bank Type *</label>
            <br /> <br />
            <select
              name="bankType"
              value={formData.bankType}
              style={{ backgroundColor: 'white' }}
              className="textarea"
              // onChange={handleInputChange}
              // required
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
              A small amount will be Credited in Your Bank Account to verify
              your Bank Account Details.
            </span>
            <div className="button-group">
              <button className="back-button">BACK</button>
              <button className="save-button" type="submit">
                SAVE & CONTINUE
              </button>
            </div>
          </form>
        </div>
      )}

      {pageflag === 'ShippingLocation' && (
        <div className="container">
          <h1 className="title">Shipping Locations</h1>
          <hr className="divider" />
          <form className="form-group" onSubmit={handleShippingLocations}>
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
          </form>
        </div>
      )}

      {pageflag === 'DigitalSignature' && (
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
                <img
                  src={uploadIcon}
                  alt="Upload Icon"
                  className="upload-icon"
                />
                <p>Drag & Drop File Or Browse</p>
                <input
                  type="file"
                  accept=".jpg,.png"
                  onChange={handleFileChange}
                  className="file-input"
                />
                {selectedFile && (
                  <p className="file-name">
                    Selected File: {selectedFile.name}
                  </p>
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
      )}
    </div>
  )
}

export default SellerDetails
