import React from 'react'
import './SellerDetails.css' // Ensure this CSS file exists for stydivng
import icon from '../images/icon.png'
import { useState } from 'react'
import uploadimg from '../images/uploadimg.png'
import { useEffect } from 'react'
import uploadIcon from '../images/uploadicon.png'

const SellerDetails = () => {
  const [pageflag, setpageflag] = useState('OnlyGST')
  const [componentflag, setcomponentflag] = useState('askGST')
  const [getGSTdetails, setgetGstDetails] = useState(true)
  const [otp, setOtp] = useState(['', '', '', ''])
  const [isTimerActive, setIsTimerActive] = useState(false) // New state for timer activation
  const [timer, setTimer] = useState(30) // Set initial time to 8 seconds
  const [isClickable, setIsClickable] = useState(false)
  const [inputType, setInputType] = useState('')

  const handleOTPinputchange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
    }
  }

  const handleselectchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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

      {pageflag === 'OnlyGST' && (
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
              id="gstDetails"
              className="rounded-lg border border-gray-300 p-2 text-base w-full bg-white"
              placeholder="Enter GST Details*"
              required
            />
            <div className="flex mt-4 fixed bottom-4">
              {getGSTdetails && (
                <>
                  <button className="bg-white text-gray-700 border border-gray-300 rounded-md px-4 py-2 text-sm shadow-md mr-4">
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
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-base"
                  placeholder="Contact Name"
                  required
                />
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-base"
                  placeholder="Mobile Number"
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
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md text-base"
                  placeholder="Enter PAN Number"
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
                        type="text"
                        name="cin"
                        placeholder="Enter CIN"
                        className="flex-grow p-3 border border-gray-300 rounded-md text-base"
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
        <div className="h-screen">
          <div className="flex-col flex-grow p-10 overflow-y-auto">
            <h1 className="text-5xl font-bold mb-5 text-left mt-10">Brand Details</h1>
            <hr className="border-b border-gray-300 mb-8" />

            <form className="space-y-6" onSubmit={handleBrandDetails}>
              <input
                type="text"
                id="brandDetails"
                className="w-full rounded-lg border border-gray-300 p-3"
                placeholder="Enter Brand Details*"
                required
              />
              <input
                type="text"
                id="manufactureName"
                className="w-full rounded-lg border border-gray-300 p-3"
                placeholder="Enter Manufacture Name*"
                required
              />
              <label
                htmlFor="trademarkNumber"
                className="block text-lg font-medium text-black text-left"
              >
                Brand trademark number*
              </label>
              <input
                type="text"
                id="trademarkNumber"
                className="w-full rounded-lg border border-gray-300 p-3"
                placeholder="Enter Trademark Registration Number*"
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
                  Upload the file
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
        </div>
      )}

      {pageflag === 'BankDetails' && (
        <div className="container p-10 text-left overflow-y-auto font-sans">
          <h1 className="text-5xl font-bold mb-2 text-left mt-10">Bank Details</h1>
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
              id="brandDetails"
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="Enter Brand Details*"
              required
            />
            <input
              type="text"
              id="bankAccountNumber"
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="Bank Account Number*"
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
              className="w-full rounded-lg border border-gray-300 p-3"
              placeholder="IFSC Code*"
              required
            />
            <label className="block text-lg font-medium">Bank Type *</label>
            <select
              name="bankType"
              value={formData.bankType}
              onChange={handleselectchange}
              className="w-full bg-white rounded-lg border border-gray-300 p-3"
              required
            >
              <option value="">Bank Type</option>
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

      {pageflag === 'ShippingLocation' && (
        <div className="container mx-auto p-10">
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

            <div className="flex gap-2 w-2/3">
              <input
                type="text"
                className="textarea w-full p-3 border rounded-lg bg-white text-sm text-gray-700 border-gray-300"
                placeholder="Enter FSSAI (optional)"
              />
              <button className="bg-[#6666FF] text-white rounded-lg text-sm">
                Verify FSSAI
              </button>
            </div>

            <div className="uploadimagecontainer flex items-center gap-4 mb-5">
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
            <div className="button-group flex gap-4">
              <button className="back-button bg-white text-gray-600 border border-gray-300 rounded-lg px-5 py-2 text-sm shadow">
                BACK
              </button>
              <button className="save-button bg-purple-600 text-white rounded-lg px-5 py-2 text-sm shadow">
                Save & Continue
              </button>
            </div>
          </form>
        </div>
      )}

      {pageflag === 'DigitalSignature' && (
        <div className="p-10">
          <h1 className="text-5xl font-bold mb-2 text-left mt-10">Digital Signature</h1>
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
                  onChange={handleFileChange}
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
            <button className="back-button bg-white text-gray-600 border border-gray-300 rounded-lg px-5 py-2 text-sm shadow-sm mr-4">
              BACK
            </button>
            <button className="bg-purple-600 text-white rounded-lg px-5 py-2 text-sm shadow-sm">
              Save & Continue
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SellerDetails
