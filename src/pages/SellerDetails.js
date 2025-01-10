import React from 'react'
// import './SellerDetails.css' // Ensure this CSS file exists for stydivng
import icon from '../images/icon.png'
import { useState } from 'react'
import uploadimg from '../images/uploadimg.png'
import { useEffect } from 'react'
import uploadIcon from '../images/uploadicon.png'
import downloadimg from '../images/downloadimg.png'

const SellerDetails = () => {
  const [pageflag, setpageflag] = useState('SellerDetails')
  const [componentflag, setcomponentflag] = useState('askGST')
  const [getGSTdetails, setgetGstDetails] = useState(true)
  const [otp, setOtp] = useState(['', '', '', ''])
  const [isTimerActive, setIsTimerActive] = useState(false) // New state for timer activation
  const [timer, setTimer] = useState(30) // Set initial time to 8 seconds
  const [isClickable, setIsClickable] = useState(false)
  const [inputType, setInputType] = useState('')

  const goto = (page) => {
    setpageflag(page)
  }
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
    setFormData((prev) => ({
      ...prev, // Preserve other fields
      [name]: value, // Update the changed field
    }))
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
      setTimer(30) // Reset timer
      setIsClickable(false) // Disable button
      console.log('Code resent!')
    }
  }

  const handleBrandDetails = () => {
    setpageflag('BankDetails')
  }

  const handleBankDetails = () => {
    setpageflag('ShippingLocations')
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
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev, // Preserve other fields
      [name]: value, // Update the changed field
    }))
  }
  const handleFileDownload = (docType) => {
    const fileUrl = fileURLs[docType]
    if (fileUrl) {
      const link = document.createElement('a')
      link.href = fileUrl
      link.download = `${docType}.pdf` // Suggest a filename (adjust format as needed)
      link.click()
    } else {
      console.error('No file available for download')
    }
  }

  const [formData, setFormData] = useState({
    gstNumber: '',
    companyname: 'Damodhar',
    contactname: '',
    mobilenumber: '',
    pannumber: '',
    cin: '',
    udyam: '',
    brandname: '',
    manufacturername: '',
    regnumber: '',
    accnum: '',
    ifsc: '',
    acctype: '',
    legalName: 'Damodhar',
    bankAccountNumber: '',
    reBankAccountNumber: '',
    ifscCode: '',
    bankType: '',
    GSTdocument: null,
    Trademarkdoc: null,
    PANdocument: null,
    CINdocument: null,
    UDYAMdocument: null,
    SellerAuthDoc: null,
    CancelledCheque: null,
    DigitalSignature: null,
  })

  const [fileURLs, setFileURLs] = useState({
    GSTdocument: null,
    Trademarkdoc: null,
    PANdocument: null,
    CINdocument: null,
    UDYAMdocument: null,
    SellerAuthDoc: null,
    CancelledCheque: null,
    DigitalSignature: null,
  })

  const handleFileChange = (event, fieldName) => {
    const file = event.target.files[0]

    if (file) {
      // Validate file size (e.g., max 5MB)
      const MAX_FILE_SIZE_MB = 5
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        alert('File size exceeds 5MB. Please upload a smaller file.')
        return
      }

      // Update formData with the uploaded file in the specific field
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: file, // Dynamically set the field based on input
      }))

      // Generate a URL for the file (if needed, e.g., for preview or download)
      setFileURLs((prevURLs) => ({
        ...prevURLs,
        [fieldName]: URL.createObjectURL(file), // Dynamically set the URL for the specific field
      }))
    } else {
      alert('No file selected. Please try again.')
    }
  }

  return (
    <div className="flex h-[100vh]">
      {/* sidebar */}
      <div className="bg-[#EBF3FA] p-4 md:p-6 lg:p-8 w-full md:w-2/3 lg:w-1/3 flex flex-col items-start relative h-[100vh]">
        <div className="flex items-center justify-between w-full">
          <img src={icon} alt="" className="w-10 h-10 md:w-12 md:h-12" />
          <h2 className="font-bold text-[#6e60f9] text-lg md:text-xl lg:text-2xl">
            Zency Hub: Fast, Simple, Profitable
          </h2>
        </div>
        <div className="relative w-full mt-6 h-full flex flex-col">
          <ul className="list-none p-0 m-0 flex flex-col h-full pl-6">
            {[
              'Account Creation',
              'Seller Details',
              'Brand Details',
              'Bank Details',
              'Shipping Location',
              'Digital Signature',
              'Verify And Submit',
            ].map((item, index) => (
              <li
                key={index}
                className={`flex items-center justify-start flex-grow text-base md:text-lg lg:text-xl ${
                  index === 1 ? 'text-[#6e60f9] font-bold' : ''
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full mr-4 relative z-10 ${
                    index === 1 ? 'bg-[#6e60f9]' : 'bg-gray-300'
                  }`}
                ></span>
                {item}
              </li>
            ))}
          </ul>
          <div className="absolute top-12 left-8 w-[0.15rem] bottom-14 bg-gray-300 z-0"></div>
        </div>
      </div>

      {pageflag === 'SellerDetails' && (
        <div className="p-10 w-full font-sans text-left overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4">Seller Details</h1>
          <p className="text-base mb-5">Enter GST No Of Your Business</p>
          <hr className="border-gray-300 mb-5" />

          <form className="mb-10" onSubmit={handleGSTsubmit}>
            <label
              htmlFor="gstDetails"
              className="block text-2xl mb-2 text-black"
            >
              GST Details
            </label>
            <input
              type="text"
              name="gstNumber"
              className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white"
              placeholder="Enter GST Details*"
              value={formData.gstNumber} // Bind value to formData
              onChange={handleChange} // Generic change handler
              required
            />
            <div className="flex mt-4 fixed bottom-4">
              {getGSTdetails && (
                <>
                  <button
                    className="bg-white text-gray-700 border border-gray-300 rounded-md px-4 py-2 text-sm shadow-md mr-4"
                    onClick={() => goto('Login')}
                  >
                    BACK
                  </button>
                  <button
                    className="bg-indigo-600 text-white rounded-md px-4 py-2 text-sm shadow-md"
                    type="submit"
                  >
                    SAVE
                  </button>
                </>
              )}
            </div>
          </form>
{/* 
          {componentflag === 'askOTP' && (
            <form
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
              onSubmit={handleOTPsubmit}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
                <h2 className="text-xl font-bold">Verify Your GST</h2>
                <p className="text-sm mt-2">
                  We have sent a 4-digit verification code to your phone.
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      className="w-10 h-10 text-center text-lg border border-gray-300 rounded-md"
                      value={digit}
                      onChange={(e) =>
                        handleOTPinputchange(index, e.target.value)
                      }
                      required
                    />
                  ))}
                </div>
                <button
                  className={`mt-4 text-sm ${
                    isClickable
                      ? 'text-blue-600'
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={handleResend}
                  disabled={!isClickable}
                >
                  Resend Code{' '}
                  {isClickable ? '' : `00:${timer < 10 ? `0${timer}` : timer}`}
                </button>
                <br />
                <button
                  className="bg-indigo-600 text-white rounded-md px-4 py-2 text-sm shadow-md mt-4"
                  type="submit"
                >
                  Verify
                </button>
              </div>
            </form>
          )} */}

          {componentflag === 'askOTP' && (
            <form
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
              onSubmit={handleOTPsubmit}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative text-center">
                {/* Cross Icon */}
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                  onClick={() => setcomponentflag('default') }
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Modal Content */}
                <h2 className="text-xl font-bold">Verify Your GST</h2>
                <p className="text-sm mt-2">
                  We have sent a 4-digit verification code to your phone.
                </p>
                <div className="flex justify-center mt-4 space-x-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      className="w-10 h-10 text-center text-lg border border-gray-300 rounded-md"
                      value={digit}
                      onChange={(e) =>
                        handleOTPinputchange(index, e.target.value)
                      }
                      required
                    />
                  ))}
                </div>
                <button
                  className={`mt-4 text-sm ${
                    isClickable
                      ? 'text-blue-600'
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={handleResend}
                  disabled={!isClickable}
                >
                  Resend Code{' '}
                  {isClickable ? '' : `00:${timer < 10 ? `0${timer}` : timer}`}
                </button>
                <br />
                <button
                  className="bg-indigo-600 text-white rounded-md px-4 py-2 text-sm shadow-md mt-4"
                  type="submit"
                >
                  Verify
                </button>
              </div>
            </form>
          )}

          {componentflag === 'showGSTinfo' && (
            <>
              <div className="bg-[#E5E5FF] p-4 md:p-6 lg:p-8 rounded-md shadow-md text-base md:text-lg lg:text-xl mb-4 h-auto md:h-[50vh] flex flex-col">
                <p className="flex-grow flex items-center w-full md:w-3/4 lg:w-2/3">
                  <strong>Legal Name:</strong>
                  <span className="ml-2">{gstDetails.legalName}</span>
                </p>
                <p className="flex-grow flex items-center w-full md:w-3/4 lg:w-2/3">
                  <strong>GST Number:</strong>
                  <span className="ml-2">{gstDetails.gstNumber}</span>
                </p>
                <p className="flex-grow flex items-center w-full md:w-3/4 lg:w-2/3">
                  <strong>Address:</strong>
                  <span className="ml-2">{gstDetails.address}</span>
                </p>
                <p className="flex-grow flex items-center w-full md:w-3/4 lg:w-2/3">
                  <strong>GST Type:</strong>
                  <span className="ml-2">{gstDetails.gstType}</span>
                </p>
                <p className="flex-grow flex items-center w-full md:w-3/4 lg:w-2/3">
                  <strong>Trade Name:</strong>
                  <span className="ml-2">{gstDetails.tradeName}</span>
                </p>
              </div>

              <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-4">
                By clicking "Verify GST Details" you agree that GST belongs to
                you.
              </p>
              <button
                className="bg-indigo-600 text-white rounded-md px-4 py-2 text-sm md:text-base shadow-md mt-4 w-full md:w-auto"
                onClick={verifyGST}
              >
                Verify GST Details
              </button>
            </>
          )}

          {componentflag === 'takeSellerDetails' && (
            <div className="seller-details-container flex flex-col gap-6 p-6 bg-gray-50 rounded-lg shadow-lg">
              <form
                className="flex flex-col gap-6"
                onSubmit={submitSellerDetails}
              >
                {/* Company Name */}
                <label className="text-lg font-semibold">Company Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-base bg-gray-100"
                  value={gstDetails.legalName}
                  readOnly
                />

                {/* Contact Details */}
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

                {/* Upload GST Document */}
                <label className="text-lg font-semibold">
                  Upload GST Document
                </label>
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="file-upload"
                    className="flex items-center gap-2 p-2 border border-indigo-500 rounded-md text-indigo-500 cursor-pointer"
                  >
                    <img src={uploadimg} alt="" className="w-5 h-5" />
                    <span>Upload the file</span>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,.png,.jpg"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, 'GSTdocument')}
                  />
                  <span className="text-sm text-gray-500">
                    Maximum File Size: 5mb
                    <br />
                    Supported Formats: Pdf, Png, Jpg
                  </span>
                </div>

                {/* PAN Details */}
                <label className="text-lg font-semibold">
                  Enter PAN Number
                </label>
                <input
                  name="pannumber"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-base"
                  placeholder="Enter PAN Number"
                  value={formData.pannumber}
                  onChange={handleChange}
                  required
                />
                <label className="text-lg font-semibold">
                  Upload PAN Document
                </label>
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="file-upload"
                    className="flex items-center gap-2 p-2 border border-indigo-500 rounded-md text-indigo-500 cursor-pointer"
                  >
                    <img src={uploadimg} alt="" className="w-5 h-5" />
                    <span>Upload the file</span>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,.png,.jpg"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, 'PANdocument')}
                  />
                  <span className="text-sm text-gray-500">
                    Maximum File Size: 5mb
                    <br />
                    Supported Formats: Pdf, Png, Jpg
                  </span>
                </div>

                {/* CIN or UDYAM Selection */}
                <div>
                  <h3 className="text-lg font-semibold">
                    Select CIN (21 digit) OR UDYAM number (19 digit) *
                  </h3>
                  <div className="flex flex-col gap-4 mt-4">
                    <div className="flex items-center gap-4">
                      <input
                        name="cin"
                        type="text"
                        placeholder="Enter CIN"
                        className="flex-grow p-3 border border-gray-300 rounded-md text-base"
                        value={formData.cin}
                        onChange={handleCINChange}
                      />
                      <input
                        type="radio"
                        name="selection"
                        value="cin"
                        checked={inputType === 'cin'}
                        readOnly
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        name="udyam"
                        placeholder="Enter UDYAM number"
                        className="flex-grow p-3 border border-gray-300 rounded-md text-base"
                        value={formData.udyam}
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
                  </div>
                </div>

                {/* Conditional CIN/UDYAM Upload */}
                {inputType === 'cin' && (
                  <div>
                    <h4 className="text-lg font-semibold">
                      Upload CIN Document *
                    </h4>
                    <div className="flex items-center gap-4 mt-4">
                      <label
                        htmlFor="file-upload"
                        className="flex items-center gap-2 p-2 border border-indigo-500 rounded-md text-indigo-500 cursor-pointer"
                      >
                        <img src={uploadimg} alt="" className="w-5 h-5" />
                        <span>Upload the file</span>
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        accept=".pdf,.png,.jpg"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, 'CINdocument')}
                      />
                      <span className="text-sm text-gray-500">
                        Maximum File Size: 5mb
                        <br />
                        Supported Formats: Pdf, Png, Jpg
                      </span>
                    </div>
                  </div>
                )}
                {inputType === 'udyam' && (
                  <div>
                    <h4 className="text-lg font-semibold">
                      Upload UDYAM Document *
                    </h4>
                    <div className="flex items-center gap-4 mt-4">
                      <label
                        htmlFor="file-upload"
                        className="flex items-center gap-2 p-2 border border-indigo-500 rounded-md text-indigo-500 cursor-pointer"
                      >
                        <img src={uploadimg} alt="" className="w-5 h-5" />
                        <span>Upload the file</span>
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        accept=".pdf,.png,.jpg"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, 'UDYAMdocument')}
                      />
                      <span className="text-sm text-gray-500">
                        Maximum File Size: 5mb
                        <br />
                        Supported Formats: Pdf, Png, Jpg
                      </span>
                    </div>
                  </div>
                )}

                {/* Save Button */}
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-3 px-6 rounded-md text-lg shadow hover:bg-indigo-700"
                >
                  Save & Continue
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {pageflag === 'BrandDetails' && (
        <div className="flex-col flex-grow p-10 overflow-y-auto">
          <h1 className="text-5xl font-bold mb-5 text-left mt-10">
            Brand Details
          </h1>
          <hr className="border-b border-gray-300 mb-8" />

          <form className="space-y-6" onSubmit={handleBrandDetails}>
            <input
              name="brandname"
              type="text"
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="Enter Brand Name*"
              value={formData.brandname}
              onChange={handleChange}
              required
            />
            <input
              name="manufacturername"
              type="text"
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="Enter Manufacture Name*"
              value={formData.manufacturername}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="trademarkNumber"
              className="block text-lg font-medium text-black text-left"
            >
              Brand trademark number*
            </label>
            <input
              name="regnumber"
              type="text"
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="Enter Trademark Registration Number*"
              value={formData.regnumber}
              onChange={handleChange}
              required
            />

            <div className="flex items-center gap-12">
              <label
                htmlFor="file-upload"
                className="inline-flex items-center justify-center p-4 border border-indigo-400 rounded-lg cursor-pointer text-indigo-400 font-medium"
              >
                <img src={uploadimg} alt="" className="w-6 h-6 mr-2" />
                Upload the file
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".pdf,.png,.jpg"
                className="hidden"
                onChange={(e) => handleFileChange(e, 'Trademarkdoc')}
              />
              <span className="text-sm text-gray-500">
                Maximum File Size: 5mb
                <br />
                Supported Formats: Pdf, Png, Jpg
              </span>
            </div>

            <label
              htmlFor="sellerAuthorization"
              className="block text-lg font-medium text-black text-left"
            >
              Seller Authorization Document*
            </label>
            <div className="flex items-center gap-12">
              <label
                htmlFor="file-upload-seller"
                className="inline-flex items-center justify-center p-4 border border-indigo-400 rounded-lg cursor-pointer text-indigo-400 font-medium"
              >
                <img src={uploadimg} alt="" className="w-6 h-6 mr-2" />
                Download format
              </label>
              <input
                id="file-upload-seller"
                type="file"
                accept=".pdf,.png,.jpg"
                className="hidden"
              />
              <span className="text-sm text-gray-500">
                Maximum File Size: 5mb
                <br />
                Supported Formats: Pdf, Png, Jpg
              </span>
            </div>

            <div className="flex items-center gap-12">
              <label
                htmlFor="file-upload-extra"
                className="inline-flex items-center justify-center p-4 border border-indigo-400 rounded-lg cursor-pointer text-indigo-400 font-medium"
              >
                <img src={uploadimg} alt="" className="w-6 h-6 mr-2" />
                Upload the file
              </label>
              <input
                id="file-upload-extra"
                type="file"
                accept=".pdf,.png,.jpg"
                className="hidden"
                onChange={(e) => handleFileChange(e, 'SellerAuthDoc')}
              />
              <span className="text-sm text-gray-500">
                Maximum File Size: 5mb
                <br />
                Supported Formats: Pdf, Png, Jpg
              </span>
            </div>

            <div className="flex gap-5 mt-8">
              <button
                type="button"
                className="bg-white text-gray-500 border border-gray-300 rounded-lg px-5 py-3 shadow"
                onClick={() => goto('SellerDetails')}
              >
                BACK
              </button>
              <button
                type="submit"
                className="bg-indigo-600 text-white rounded-lg px-5 py-3 shadow"
              >
                SAVE & CONTINUE
              </button>
            </div>
          </form>
        </div>
      )}

      {pageflag === 'BankDetails' && (
        <div className="container p-10 text-left overflow-y-auto font-sans">
          <h1 className="text-5xl font-bold mb-2 text-left mt-10">
            Bank Details
          </h1>
          <hr className="border-b border-gray-300 mb-5" />
          <label
            htmlFor="gstDetails"
            className="block text-2xl mb-2 text-black"
          >
            GST Number
          </label>
          <input
            type="text"
            id="gstDetails"
            className="w-full rounded-lg border border-gray-300 p-3 mb-5"
            value={formData.gstNumber}
            readOnly
          />
          <label
            htmlFor="gstDetails"
            className="block text-2xl mb-2 text-black"
          >
            Legal Name
          </label>
          <input
            type="text"
            id="gstDetails"
            className="w-full rounded-lg border border-gray-300 p-3 mb-10"
            value={formData.legalName}
            readOnly
          />
          <form className="space-y-5" onSubmit={handleBankDetails}>
            <input
              type="text"
              name="accnum"
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="Bank Account Number*"
              value={formData.accnum}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="reEnterBankAccountNumber"
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="Re-enter Bank Account Number*"
              required
            />
            <input
              type="text"
              id="ifscCode"
              name="ifsc"
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="IFSC Code*"
              value={formData.ifsc}
              onChange={handleChange}
              required
            />
            <label className="block text-lg font-medium">Account Type *</label>
            <select
              name="bankType"
              value={formData.bankType}
              className="w-full bg-white rounded-lg border border-gray-300 p-3"
              onChange={handleChange}
              required
            >
              <option value="">Account Type</option>
              <option value="Savings">Savings</option>
              <option value="Current">Current</option>
            </select>
            <label
              htmlFor="cancelledCheque"
              className="block text-2xl mb-2 text-black"
            >
              Upload Cancelled Cheque
            </label>
            <div className="flex items-center gap-12">
              <label
                htmlFor="file-upload"
                className="inline-flex items-center justify-center p-4 border border-indigo-400 rounded-lg cursor-pointer text-indigo-400 font-medium"
              >
                <span role="img" aria-label="upload">
                  <img src={uploadimg} alt="" />
                </span>
                &nbsp; Upload the file
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".pdf,.png,.jpg"
                className="hidden"
                onChange={(e) => handleFileChange(e, 'CancelledCheque')}
              />
              <span className="text-sm text-gray-500">
                Maximum File Size: 5mb
                <br />
                Supported Formats: Pdf, Png, Jpg
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              A small amount will be Credited in Your Bank Account to verify
              your Bank Account Details.
            </p>
            <div className="flex space-x-5 mt-5">
              <button
                type="button"
                className="bg-white text-gray-500 border border-gray-300 rounded-lg px-5 py-3 shadow"
                onClick={() => goto('BrandDetails')}
              >
                BACK
              </button>
              <button
                type="submit"
                className="bg-indigo-600 text-white rounded-lg px-5 py-3 shadow"
              >
                SAVE & CONTINUE
              </button>
            </div>
          </form>
        </div>
      )}

      {pageflag === 'ShippingLocations' && (
        <div className="container mx-auto p-10 h-full">
          <h1 className="text-5xl font-bold mb-2 mt-10 text-left">
            Shipping Locations
          </h1>
          <hr className="border-t border-gray-300 mb-5" />
          <form
            className="form-group space-y-6"
            onSubmit={handleShippingLocations}
          >
            <div className="location-selector flex gap-2 mb-10 w-full mt-8">
              <select className="textarea w-1/3 p-3 border rounded-lg bg-white text-sm text-gray-700 border-gray-300">
                <option>CCGYT76456678FGTVV</option>
              </select>
              <input
                type="text"
                placeholder="Hyderabad"
                className="textarea w-1/3 p-3 border rounded-lg bg-white text-sm text-gray-700 border-gray-300"
              />
            </div>

            <div className="p-4 border border-black rounded-lg w-2/3 h-[30vh] space-y-3 mb-8 flex flex-col">
              <p className="gst-label font-bold text-gray-900 text-left">
                GST number
              </p>
              <p className="gst-value text-gray-700 text-left">
                CCGYT76456678FGTVV
              </p>
              <br />
              <select className="textarea w-full p-3 border rounded-lg bg-white text-sm text-gray-700 border-gray-300">
                <option>Select Address</option>
              </select>
              <p className="info-text text-xs text-purple-400 mt-3 text-left flex-1">
                These Addresses Are Fetched From Your GST Information
              </p>
              <div className="flex items-center gap-4 flex-1">
                <label
                  htmlFor="file-upload"
                  className="uploadimage inline-flex items-center justify-center p-3 border rounded-lg cursor-pointer text-blue-600 border-blue-600 text-sm font-medium"
                >
                  <span role="img" aria-label="upload">
                    <img src={uploadimg} alt="" className="h-4 w-4" />
                  </span>
                  &nbsp; Upload the file
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.png,.jpg"
                  className="hidden"
                />
                <span className="text-gray-500 text-xs">
                  Maximum File Size: 5mb <br />
                  Supported Formats: Pdf, Png, Jpg
                </span>
              </div>
            </div>

            <div className="button-group flex gap-4">
              <button
                className="back-button bg-white text-gray-600 border border-gray-300 rounded-lg px-5 py-2 text-sm shadow"
                onClick={() => goto('BankDetails')}
              >
                BACK
              </button>
              <button className="save-button bg-[#6666FF] text-white rounded-lg px-5 py-2 text-sm shadow">
                Save & Continue
              </button>
            </div>
          </form>
        </div>
      )}

      {pageflag === 'DigitalSignatur' && (
        <div className="p-10">
          <h1 className="text-5xl font-bold mb-2 text-left mt-10">
            Digital Signature
          </h1>
          <hr className="border-t border-gray-300 mb-5" />
          <div className="bg-white mt-10">
            <div
              className="flex justify-center items-center flex-col"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <div className="w-[30vw] h-[35vh] border-2 border-black rounded-3xl flex flex-col justify-center items-center text-center relative">
                <img
                  src={uploadIcon}
                  alt="Upload Icon"
                  className="w-[10vw] h-[11vh] mb-2"
                />
                <p className="text-lg text-gray-700">
                  Drag & Drop File Or Browse
                </p>
                <input
                  type="file"
                  accept=".jpg,.png"
                  onChange={(e) => handleFileChange(e, 'DigitalSignature')}
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                />
                {selectedFile && (
                  <p className="file-name text-sm text-gray-800 mt-2">
                    Selected File: {selectedFile.name}
                  </p>
                )}
                <p className="upload-info text-xs text-gray-500 mt-2">
                  Supported Formats: Jpg, Png <br /> Maximum File Size: 2 MB
                </p>
              </div>
            </div>
          </div>

          <div className="button-group flex mt-5">
            <button
              className="back-button bg-white text-gray-600 border border-gray-300 rounded-lg px-5 py-2 text-sm shadow-sm mr-4"
              onClick={() => goto('ShippingLocations')}
            >
              BACK
            </button>
            <button className="bg-purple-600 text-white rounded-lg px-5 py-2 text-sm shadow-sm">
              Save & Continue
            </button>
          </div>
        </div>
      )}

      {pageflag === 'DigitalSignature' && (
        <div className="p-10 w-full font-sans text-left overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4">Verify and Submit</h1>
          <hr className="border-gray-300 mb-5" />
          <h3 className="text-3xl font-bold mb-8">Seller Details</h3>
          <h4 className="text-2xl font-semibold mb-4"> GST Details</h4>
          <label className="text-xl text-[#BCB8B5]"> GST number</label>
          <input
            type="text"
            name="gstNumber"
            className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white mb-4"
            value={formData.gstNumber} // Bind value to formData
            readOnly
          />
          <label className="text-xl text-[#BCB8B5]"> Company Name</label>
          <input
            type="text"
            name="gstNumber"
            className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white mb-4"
            value={formData.companyname} // Bind value to formData
            readOnly
          />
          <h4 className="text-2xl font-semibold mb-4"> Contact Details</h4>
          <label className="text-xl text-[#BCB8B5]"> Contact Name</label>
          <input
            name="contactname"
            type="text"
            className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white mb-4"
            value={formData.contactname}
            readOnly
          />
          <label className="text-xl text-[#BCB8B5]"> Mobile Number</label>
          <input
            name="mobilenumber"
            type="text"
            className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white mb-4"
            value={formData.mobilenumber}
            readOnly
          />
          <h4 className="text-2xl font-semibold mb-4"> Seller Document</h4>
          <div className="flex items-center gap-4 mb-4  ">
            <button
              className={`bg-[#E0E0FF] flex items-center gap-2 p-2 border border-indigo-500 rounded-md text-indigo-500 ${
                fileURLs.GSTdocument
                  ? 'cursor-pointer'
                  : 'cursor-not-allowed opacity-50'
              }`}
              onClick={() => handleFileDownload('GSTdocument')}
              disabled={!fileURLs.GSTdocument}
            >
              <img src={downloadimg} alt="Download icon" className="w-5 h-5" />
              <span className="text-[#6666FF]">Download GST Certificate</span>
            </button>
          </div>
          <label className="text-xl text-[#BCB8B5]"> PAN Number</label>
          <input
            name="mobilenumber"
            type="text"
            className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white mb-4"
            value={formData.pannumber}
            readOnly
          />
          <div className="flex items-center gap-4 mb-4  ">
            <button
              className={`bg-[#E0E0FF] flex items-center gap-2 p-2 border border-indigo-500 rounded-md text-indigo-500 ${
                fileURLs.PANdocument
                  ? 'cursor-pointer'
                  : 'cursor-not-allowed opacity-50'
              }`}
              onClick={() => handleFileDownload('PANdocument')}
              disabled={!fileURLs.PANdocument}
            >
              <img src={downloadimg} alt="Download icon" className="w-5 h-5" />
              <span className="text-[#6666FF]">Download PAN Document</span>
            </button>
          </div>

          {inputType === 'cin' && (
            <div>
              <label className="text-xl text-[#BCB8B5]">CIN Number</label>
              <input
                name="mobilenumber"
                type="text"
                className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white mb-4"
                value={formData.cin}
                readOnly
              />
              <div className="flex items-center gap-4 mb-4  ">
                <button
                  className={`bg-[#E0E0FF] flex items-center gap-2 p-2 border border-indigo-500 rounded-md text-indigo-500 ${
                    fileURLs.CINdocument
                      ? 'cursor-pointer'
                      : 'cursor-not-allowed opacity-50'
                  }`}
                  onClick={() => handleFileDownload('CINdocument')}
                  disabled={!fileURLs.CINdocument}
                >
                  <img
                    src={downloadimg}
                    alt="Download icon"
                    className="w-5 h-5"
                  />
                  <span className="text-[#6666FF]">Download CIN Document</span>
                </button>
              </div>
            </div>
          )}
          {inputType === 'udyam' && (
            <div>
              <label className="text-xl text-[#BCB8B5]">UDYAM Number</label>
              <input
                name="mobilenumber"
                type="text"
                className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white mb-4"
                value={formData.udyam}
                readOnly
              />
              <div className="flex items-center gap-4 mb-4  ">
                <button
                  className={`bg-[#E0E0FF] flex items-center gap-2 p-2 border border-indigo-500 rounded-md text-indigo-500 ${
                    fileURLs.UDYAMdocument
                      ? 'cursor-pointer'
                      : 'cursor-not-allowed opacity-50'
                  }`}
                  onClick={() => handleFileDownload('UDYAMdocument')}
                  disabled={!fileURLs.UDYAMdocument}
                >
                  <img
                    src={downloadimg}
                    alt="Download icon"
                    className="w-5 h-5"
                  />
                  <span className="text-[#6666FF]">
                    Download UDYAM Document
                  </span>
                </button>
              </div>
            </div>
          )}

          <h4 className="text-2xl font-semibold mb-4"> Brand Details</h4>
          <label className="text-xl text-[#BCB8B5]"> Brand Name</label>
          <input
            name="mobilenumber"
            type="text"
            className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white mb-4"
            value={formData.brandname}
            readOnly
          />
          <label className="text-xl text-[#BCB8B5]"> Manufacturer Name</label>
          <input
            name="mobilenumber"
            type="text"
            className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white mb-4"
            value={formData.manufacturername}
            readOnly
          />
          <label className="text-xl text-[#BCB8B5]">
            {' '}
            Brand Trademark Number
          </label>
          <input
            name="mobilenumber"
            type="text"
            className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white mb-4"
            value={formData.regnumber}
            readOnly
          />
          <div className="flex items-center gap-4 mb-4">
            <button
              className={`flex items-center gap-2 p-2 border border-indigo-500 rounded-md text-indigo-500 ${
                fileURLs.Trademarkdoc
                  ? 'cursor-pointer'
                  : 'cursor-not-allowed opacity-50'
              }`}
              onClick={() => handleFileDownload('')}
              disabled={!fileURLs.Trademarkdoc}
            >
              <img src={downloadimg} alt="Download icon" className="w-5 h-5" />
              <span>Download Brand Trademark Document</span>
            </button>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <button
              className={`flex items-center gap-2 p-2 border border-indigo-500 rounded-md text-indigo-500 ${
                fileURLs.Trademarkdoc
                  ? 'cursor-pointer'
                  : 'cursor-not-allowed opacity-50'
              }`}
              onClick={() => handleFileDownload('')}
              disabled={!fileURLs.Trademarkdoc}
            >
              <img src={downloadimg} alt="Download icon" className="w-5 h-5" />
              <span>Download Bra nd Trademark Document</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SellerDetails
