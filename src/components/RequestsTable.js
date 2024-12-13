import React from 'react'
import './RequestsTable.css'

const handleBtnClick = () => {
  console.log('View all button clicked')
}

// Array with 5 rows of random data
const requests = [
  {
    requestId: 'REQ1001',
    productName: 'Steel Rods',
    grade: 'A',
    quantity: 150,
    pricePerKg: 50,
    location: 'Mumbai',
    timeline: '10 Days',
  },
  {
    requestId: 'REQ1002',
    productName: 'Aluminum Sheets',
    grade: 'B',
    quantity: 200,
    pricePerKg: 70,
    location: 'Delhi',
    timeline: '5 Days',
  },
  {
    requestId: 'REQ1003',
    productName: 'Copper Wire',
    grade: 'A',
    quantity: 100,
    pricePerKg: 90,
    location: 'Hyderabad',
    timeline: '7 Days',
  },
  {
    requestId: 'REQ1004',
    productName: 'Plastic Pipes',
    grade: 'C',
    quantity: 300,
    pricePerKg: 20,
    location: 'Pune',
    timeline: '3 Days',
  },
  {
    requestId: 'REQ1005',
    productName: 'Glass Sheets',
    grade: 'A',
    quantity: 120,
    pricePerKg: 60,
    location: 'Chennai',
    timeline: '8 Days',
  },
]

const RequestsTable = ({ title }) => {
  return (
    <div className="requests-table">
      <h4>{title}</h4>
      <button className="viewallbtn" onClick={handleBtnClick}>
        View all
      </button>
      <table className="completetable">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Product Name</th>
            <th>Grade</th>
            <th>Quantity</th>
            <th>Price/Kg</th>
            <th>Delivery Location</th>
            <th>Delivery Timeline</th>
            <th className="actionheader">Actions</th>
          </tr>
        </thead>
        <tbody className="tablebody">
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.requestId}</td>
              <td>{request.productName}</td>
              <td>{request.grade}</td>
              <td>
                <div className="Quantityvalue">
                  <span>{request.quantity}</span>
                  <span>Kg</span>
                </div>
              </td>
              <td>₹{request.pricePerKg}</td>
              <td>{request.location}</td>
              <td>{request.timeline}</td>
              <td className="Actionbuttons">
                <button className="declinebtn">Decline</button>
                <button className="acceptbtn">Accept</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RequestsTable
